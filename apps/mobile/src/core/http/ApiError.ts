/**
 * The only error type that crosses from the data layer into application/UI.
 * Screens switch on `kind`, never on HTTP status codes or fetch exceptions.
 */
export type ApiErrorKind =
  | 'network' // no connectivity / timeout
  | 'unauthorized' // session invalid even after native refresh
  | 'validation' // 4xx with field errors
  | 'not_found'
  | 'conflict'
  | 'server'; // 5xx or unparseable

export class ApiError extends Error {
  constructor(
    readonly kind: ApiErrorKind,
    message: string,
    readonly status?: number,
    readonly fieldErrors?: Readonly<Record<string, string>>,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
