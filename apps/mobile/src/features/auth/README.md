# feature: auth

Sign up, log in, session gate on boot, log out.

| | |
|---|---|
| Screens | `S01_splash` → `SplashScreen`, `S02_sign_up` → `SignUpScreen`, `S03_log_in` → `LogInScreen` |
| Endpoints | POST /auth/signup, /auth/login, /auth/refresh (refresh is called by Kotlin, not here) |
| May import | core only |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
