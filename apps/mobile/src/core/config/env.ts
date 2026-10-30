/**
 * Runtime config. Values come from build-time constants, never hardcoded URLs in features.
 * TODO(phase 2): inject per build type (debug/release) instead of __DEV__; never hardcode URLs in features.
 */
export const env = {
  apiBaseUrl: __DEV__ ? 'http://10.0.2.2:8000/api/v1' : 'https://api.fillmate.example/api/v1',
} as const;
