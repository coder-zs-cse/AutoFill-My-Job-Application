import { ApiError, type ApiErrorKind } from './ApiError';

/**
 * Supplies a valid access token. Implemented by the native session (Kotlin owns
 * tokens and refresh), injected here so this file never imports native code.
 */
export interface TokenProvider {
  getAccessToken(): Promise<string | null>;
  /** Ask the owner to refresh. Returns the new token, or null if the session is dead. */
  refresh(): Promise<string | null>;
}

export interface HttpClient {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body?: unknown): Promise<T>;
  patch<T>(path: string, body?: unknown): Promise<T>;
  delete<T>(path: string): Promise<T>;
}

const STATUS_KIND: Record<number, ApiErrorKind> = {
  401: 'unauthorized',
  404: 'not_found',
  409: 'conflict',
  422: 'validation',
};

export function createHttpClient(baseUrl: string, tokens: TokenProvider): HttpClient {
  async function request<T>(method: string, path: string, body?: unknown, retried = false): Promise<T> {
    const token = await tokens.getAccessToken();
    let res: Response;
    try {
      res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: body === undefined ? undefined : JSON.stringify(body),
      });
    } catch {
      throw new ApiError('network', 'Network request failed');
    }

    if (res.status === 401 && !retried) {
      const fresh = await tokens.refresh();
      if (fresh) return request<T>(method, path, body, true);
    }
    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      const kind = STATUS_KIND[res.status] ?? (res.status >= 500 ? 'server' : 'validation');
      throw new ApiError(kind, payload.detail ?? res.statusText, res.status, payload.field_errors);
    }
    return (res.status === 204 ? undefined : await res.json()) as T;
  }

  return {
    get: path => request('GET', path),
    post: (path, body) => request('POST', path, body),
    patch: (path, body) => request('PATCH', path, body),
    delete: path => request('DELETE', path),
  };
}
