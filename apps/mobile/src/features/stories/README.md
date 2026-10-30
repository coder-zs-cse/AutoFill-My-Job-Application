# feature: stories

Long-form STAR stories and preferences used only as LLM context.

| | |
|---|---|
| Screens | `S16_story_editor` → `StoryEditorScreen`, `S17_preference_editor` → `PreferenceEditorScreen` |
| Endpoints | CRUD /stories, /preferences |
| May import | core only. Exports StoriesPrefsPanel (S15) which kb's screen renders in its second segment. |
| Layers | domain/ → data/ → application/ → ui/ (copy the kb feature's pattern) |

Visual reference for each screen: `design/stitch/<screen id>/`. Full mapping: `.claude/screens.md`.
