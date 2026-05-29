import { buildApiUrl } from "@/api/api-config";

export type ApiRequestOptions = {
  body?: unknown;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

export class ApiClientError extends Error {
  status: number;
  statusText: string;
  body?: unknown;

  constructor(params: { status: number; statusText: string; body?: unknown; message?: string }) {
    super(params.message ?? `API request failed: ${params.status} ${params.statusText}`);
    this.name = "ApiClientError";
    this.status = params.status;
    this.statusText = params.statusText;
    this.body = params.body;
  }
}

async function parseJsonResponse(response: Response): Promise<unknown> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function request<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  path: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { body, headers, signal } = options;
  const url = buildApiUrl(path);

  const requestHeaders = new Headers(headers);
  const hasJsonBody = body !== undefined && body !== null;

  if (hasJsonBody && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (!requestHeaders.has("Accept")) {
    requestHeaders.set("Accept", "application/json");
  }

  const response = await fetch(url, {
    method,
    headers: requestHeaders,
    body: hasJsonBody ? JSON.stringify(body) : undefined,
    signal,
  });

  if (response.status === 204) {
    return null as T;
  }

  const responseBody = await parseJsonResponse(response);

  if (!response.ok) {
    const errorMessage =
      typeof responseBody === "object" &&
      responseBody !== null &&
      "message" in responseBody &&
      typeof (responseBody as { message?: unknown }).message === "string"
        ? (responseBody as { message: string }).message
        : undefined;

    throw new ApiClientError({
      status: response.status,
      statusText: response.statusText,
      body: responseBody,
      message: errorMessage,
    });
  }

  return responseBody as T;
}

export const apiClient = {
  get<T>(path: string, options?: Omit<ApiRequestOptions, "body">) {
    return request<T>("GET", path, options);
  },
  post<T>(path: string, body?: unknown, options?: Omit<ApiRequestOptions, "body">) {
    return request<T>("POST", path, { ...options, body });
  },
  patch<T>(path: string, body?: unknown, options?: Omit<ApiRequestOptions, "body">) {
    return request<T>("PATCH", path, { ...options, body });
  },
  del<T>(path: string, options?: Omit<ApiRequestOptions, "body">) {
    return request<T>("DELETE", path, options);
  },
};
