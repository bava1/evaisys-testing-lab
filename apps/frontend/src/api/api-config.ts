import { appConfig } from "@/config/app-config";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
}

function normalizePath(path: string): string {
  return path.trim().replace(/^\/+/, "");
}

function getFallbackApiBaseUrl(): string {
  if (typeof window === "undefined") {
    return "http://127.0.0.1:8000";
  }

  const { protocol, hostname } = window.location;
  const apiHost = hostname === "localhost" ? "127.0.0.1" : hostname;
  return `${protocol}//${apiHost}:8000`;
}

export function buildApiUrl(path: string): string {
  const baseUrl = normalizeBaseUrl(appConfig.apiBaseUrl || getFallbackApiBaseUrl());

  const normalizedPath = normalizePath(path);

  if (!normalizedPath) {
    return baseUrl;
  }

  return `${baseUrl}/${normalizedPath}`;
}
