import type { FullConfig } from "@playwright/test";

import { getFrontendBaseUrl, warmUpFrontendRoutes } from "./helpers/frontend-warmup";

export default async function globalSetup(config: FullConfig) {
  const baseUrl = getFrontendBaseUrl(config);
  await warmUpFrontendRoutes(baseUrl);
}
