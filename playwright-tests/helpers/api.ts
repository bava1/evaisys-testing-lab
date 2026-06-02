export const apiBaseUrl = "http://127.0.0.1:8000";

export function apiUrl(path: string) {
  return `${apiBaseUrl}${path}`;
}

export function uniqueApiName(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}
