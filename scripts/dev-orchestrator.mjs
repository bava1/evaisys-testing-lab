import { spawn, spawnSync } from "node:child_process";
import net from "node:net";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const frontendPort = 3000;
const backendPort = 8000;
const backendRunner = path.join(rootDir, "scripts", "run-backend.ps1");

let frontendProcess = null;
let backendProcess = null;
let shuttingDown = false;
let exitCode = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function checkPortAvailable(port, host = "127.0.0.1") {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once("error", (error) => {
      if (error && error.code === "EADDRINUSE") {
        resolve(false);
        return;
      }
      reject(error);
    });

    server.once("listening", () => {
      server.close(() => resolve(true));
    });

    server.listen(port, host);
  });
}

function getListeningPidWindows(port) {
  const result = spawnSync("netstat", ["-ano", "-p", "tcp"], {
    encoding: "utf8",
    shell: false,
  });

  if (result.status !== 0 || !result.stdout) {
    return null;
  }

  const lines = result.stdout.split(/\r?\n/);
  const targetSuffix = `:${port}`;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("TCP")) {
      continue;
    }

    const parts = trimmed.split(/\s+/);
    if (parts.length < 5) {
      continue;
    }

    const localAddress = parts[1];
    const state = parts[3];
    const pidRaw = parts[4];

    if (state !== "LISTENING") {
      continue;
    }

    if (!localAddress.endsWith(targetSuffix)) {
      continue;
    }

    const pid = Number.parseInt(pidRaw, 10);
    if (Number.isNaN(pid)) {
      continue;
    }

    return pid;
  }

  return null;
}

function runCommand(command, args, options = {}) {
  return spawn(command, args, {
    stdio: "inherit",
    shell: false,
    ...options,
  });
}

function createCommand(command, args) {
  if (process.platform === "win32") {
    return {
      command: "cmd.exe",
      args: ["/c", command, ...args],
    };
  }

  return { command, args };
}

function killTreeWindows(pid) {
  return new Promise((resolve) => {
    const killer = spawn("taskkill", ["/PID", String(pid), "/T", "/F"], {
      stdio: "ignore",
      shell: false,
    });
    killer.on("close", () => resolve());
    killer.on("error", () => resolve());
  });
}

function killTreeWindowsSync(pid) {
  spawnSync("taskkill", ["/PID", String(pid), "/T", "/F"], {
    stdio: "ignore",
    shell: false,
  });
}

function killProcess(child, signal = "SIGTERM") {
  if (!child || child.killed) {
    return Promise.resolve();
  }

  if (process.platform === "win32") {
    return killTreeWindows(child.pid);
  }

  return new Promise((resolve) => {
    child.once("close", () => resolve());
    try {
      child.kill(signal);
    } catch {
      resolve();
    }
  });
}

async function shutdown(reason = "", code = 0) {
  if (shuttingDown) {
    return;
  }
  shuttingDown = true;
  exitCode = code;

  if (reason) {
    console.error(reason);
  }

  await Promise.all([killProcess(frontendProcess), killProcess(backendProcess)]);
  process.exit(exitCode);
}

function attachLifecycle(name, child) {
  child.on("error", (error) => {
    shutdown(`[dev] ${name} failed to start: ${error.message}`, 1);
  });

  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }

    const normalizedCode = typeof code === "number" ? code : 1;
    const message = signal
      ? `[dev] ${name} exited due to signal ${signal}. Stopping the other service.`
      : `[dev] ${name} exited with code ${normalizedCode}. Stopping the other service.`;
    shutdown(message, normalizedCode === 0 ? 1 : normalizedCode);
  });
}

async function main() {
  async function ensurePortAvailableOrHeal(port) {
    if (process.platform !== "win32") {
      const available = await checkPortAvailable(port);
      if (available) {
        return;
      }

      console.error(
        `Port ${port} is already in use. Automatic cleanup is currently implemented for Windows only.`
      );
      process.exit(1);
    }

    const pid = getListeningPidWindows(port);
    if (!pid) {
      return;
    }

    console.log(`[dev] Port ${port} is in use by PID ${pid}. Stopping it...`);
    await killTreeWindows(pid);

    const timeoutMs = 5000;
    const pollMs = 250;
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
      const currentPid = getListeningPidWindows(port);
      if (!currentPid) {
        console.log(`[dev] Port ${port} is now free.`);
        return;
      }
      await sleep(pollMs);
    }

    console.error(`[dev] Failed to free port ${port} within 5 seconds.`);
    process.exit(1);
  }

  await ensurePortAvailableOrHeal(frontendPort);
  await ensurePortAvailableOrHeal(backendPort);

  if (!path.isAbsolute(backendRunner) || !fs.existsSync(backendRunner)) {
    throw new Error(`Backend runner is invalid: ${backendRunner}`);
  }

  const frontendLaunch = createCommand("npm", ["--prefix", "apps/frontend", "run", "dev"]);
  const backendLaunch = createCommand("powershell", [
    "-ExecutionPolicy",
    "Bypass",
    "-File",
    backendRunner,
  ]);

  frontendProcess = runCommand(frontendLaunch.command, frontendLaunch.args, {
    cwd: rootDir,
  });

  backendProcess = runCommand(backendLaunch.command, backendLaunch.args, { cwd: rootDir });

  attachLifecycle("frontend", frontendProcess);
  attachLifecycle("backend", backendProcess);

  process.on("SIGINT", () => {
    shutdown("[dev] Received SIGINT. Shutting down frontend and backend...", 0);
  });

  process.on("SIGTERM", () => {
    shutdown("[dev] Received SIGTERM. Shutting down frontend and backend...", 0);
  });

  process.on("exit", () => {
    if (frontendProcess?.pid) {
      if (process.platform === "win32") {
        killTreeWindowsSync(frontendProcess.pid);
      } else {
        try {
          frontendProcess.kill("SIGTERM");
        } catch {}
      }
    }

    if (backendProcess?.pid) {
      if (process.platform === "win32") {
        killTreeWindowsSync(backendProcess.pid);
      } else {
        try {
          backendProcess.kill("SIGTERM");
        } catch {}
      }
    }
  });
}

main().catch((error) => {
  console.error(`[dev] Orchestrator failed: ${error.message}`);
  process.exit(1);
});
