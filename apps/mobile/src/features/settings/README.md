# feature: settings

Autofill toggles, sync, appearance, export, delete account.

| | |
|---|---|
| Screens | `S26_settings` → `SettingsScreen` |
| Endpoints | GET/PATCH /me/settings, POST /me/export, DELETE /me |
| May import | auth (log out). |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
