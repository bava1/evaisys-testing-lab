const REQUEST_TIMEOUT_MS = 5_000;

const FRONTEND_WARMUP_ROUTES = [
  "/login",
  "/",
  "/tasks",
  "/requests",
  "/articles",
  "/contact",
  "/testing-lab",
];

type BaseUrlConfig = {
  use?: {
    baseURL?: unknown;
  };
  projects?: Array<{
    use?: {
      baseURL?: unknown;
    };
  }>;
};

export function getFrontendBaseUrl(config: BaseUrlConfig) {
  const configuredBaseUrl =
    getConfiguredBaseUrl(config.use?.baseURL) ??
    config.projects?.map((project) => getConfiguredBaseUrl(project.use?.baseURL)).find(Boolean);

  return normalizeBaseUrl(configuredBaseUrl ?? "http://127.0.0.1:3000");
}

export async function warmUpFrontendRoutes(baseUrl: string) {
  // Warm up known routes so Next.js compiles them before the first UI test hits the app.
  for (const route of FRONTEND_WARMUP_ROUTES) {
    await warmUpRoute(baseUrl, route);
  }
}

async function warmUpRoute(baseUrl: string, route: string) {
  const requestUrl = new URL(route, `${normalizeBaseUrl(baseUrl)}/`).toString();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      redirect: "manual",
      signal: controller.signal,
      headers: {
        accept: "text/html,application/xhtml+xml",
      },
    });

    // Skip business validation on purpose because any HTTP response is enough to prime the dev server.
    await response.arrayBuffer();
  } catch (error) {
    throw new Error(buildWarmUpErrorMessage(requestUrl, error), { cause: error });
  } finally {
    clearTimeout(timeoutId);
  }
}

function getConfiguredBaseUrl(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function buildWarmUpErrorMessage(requestUrl: string, error: unknown) {
  const reason = error instanceof Error ? error.message : String(error);
  return `Frontend warm-up failed for ${requestUrl}. The frontend server was unavailable, refused the connection, or timed out. ${reason}`;
}
