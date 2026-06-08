import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./test-results",

  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],

  globalSetup: "./global-setup.ts",

  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],

  webServer: {
    command: "npm run dev",
    cwd: "..",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 180_000,
  },
});