import { appConfig } from "@/config/app-config";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
}

function normalizePath(path: string): string {
  return path.trim().replace(/^\/+/, "");
}

export function buildApiUrl(path: string): string {
  const baseUrl = normalizeBaseUrl(appConfig.apiBaseUrl);

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not configured. Set it to enable frontend API requests."
    );
  }

  const normalizedPath = normalizePath(path);

  if (!normalizedPath) {
    return baseUrl;
  }

  return `${baseUrl}/${normalizedPath}`;
}
