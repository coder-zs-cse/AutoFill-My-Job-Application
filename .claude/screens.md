# Screens: ID → owner → route → file

Every visual lives in `design/stitch/<ID>/` (prompt, your export, notes). States (b/c/d/e suffixes) are the same
component in a different state, not new routes. Sheets and dialogs are components owned by their host screen.

## Navigation

```
RootNavigator (boot state decides which tree renders; "back" can't cross trees)
├─ loading     → Splash (S01)
├─ signedOut   → Auth stack: SignUp (S02) · LogIn (S03)
├─ onboarding  → Onboarding stack: Welcome S04 → ResumeUpload S05 → ImportReview S06
│                → EnableAutofill S07 → ChromeSetup S08 → Done S09
└─ ready       → App stack
                 ├─ Home = Drawer (S25: Resume, Stories, Profile, Upgrade, Settings, Chrome guide, Help)
                 │        └─ Tabs: Knowledge S10(+S15) · History S20 · Gaps S23 · Playground S19
                 └─ pushed over tabs: QuestionDetail S11 · AddQuestion S12 · StoryEditor S16 · PreferenceEditor S17
                    · Resume S18 · ImportReview S06 · SessionDetail S21 · Settings S26 · Profile S27
                    · Upgrade S28 · ChromeGuide S29
Outside RN (Kotlin, over Chrome): dropdown S30 · inline chips S31 · AI Answer S32a–d · Save for later S33
```

Why tabs + drawer: the four tabs are the daily loop (manage → see what happened → fix gaps → test).
Account and setup screens are visited rarely, so they live in the drawer instead of taking tab space.

Typed params: `apps/mobile/src/app/navigation/routes.ts`.

## Mapping

| Screen ID | Kind | Owner | Route / host | Implement in |
|---|---|---|---|---|
| `S00_style_sheet` | reference | `design-system` | none (reference) | `src/design-system/primitives/* + patterns/*` |
| `S01_splash` | screen | `auth` | RootNavigator boot=loading | `src/features/auth/ui/screens/SplashScreen.tsx` |
| `S02_sign_up` | screen | `auth` | Auth › SignUp | `src/features/auth/ui/screens/SignUpScreen.tsx` |
| `S02b_sign_up_error` | state | `auth` | Auth › SignUp | `SignUpScreen (validation state)` |
| `S03_log_in` | screen | `auth` | Auth › LogIn | `src/features/auth/ui/screens/LogInScreen.tsx` |
| `S04_onb_welcome` | screen | `onboarding` | Onboarding › Welcome | `src/features/onboarding/ui/screens/WelcomeScreen.tsx` |
| `S05_onb_resume_upload` | screen | `onboarding` | Onboarding › ResumeUpload | `src/features/onboarding/ui/screens/ResumeUploadStepScreen.tsx (uses resume's ResumeUploader)` |
| `S05b_onb_resume_parsing` | state | `onboarding` | Onboarding › ResumeUpload | `ResumeUploadStepScreen (parsing state)` |
| `S06_import_review` | screen | `importReview` | Onboarding › ImportReview and App › ImportReview | `src/features/importReview/ui/screens/ImportReviewScreen.tsx` |
| `S06b_conflict_sheet` | sheet | `importReview` | sheet on ImportReview | `src/features/importReview/ui/components/ConflictResolveSheet.tsx` |
| `S07_onb_enable_autofill` | screen | `onboarding` | Onboarding › EnableAutofill | `src/features/onboarding/ui/screens/EnableAutofillScreen.tsx` |
| `S07b_onb_autofill_enabled` | state | `onboarding` | Onboarding › EnableAutofill | `EnableAutofillScreen (enabled state)` |
| `S08_onb_chrome_setup` | screen | `onboarding` | Onboarding › ChromeSetup | `src/features/onboarding/ui/screens/ChromeSetupStepScreen.tsx (uses chromeGuide's ChromeSteps)` |
| `S09_onb_done` | screen | `onboarding` | Onboarding › Done | `src/features/onboarding/ui/screens/OnboardingDoneScreen.tsx` |
| `S10_kb_home` | screen | `kb` | Tabs › Knowledge | `src/features/kb/ui/screens/KnowledgeBaseScreen.tsx` |
| `S10b_kb_empty` | state | `kb` | Tabs › Knowledge | `KnowledgeBaseScreen (empty state, design-system EmptyState)` |
| `S10c_kb_filter_sheet` | sheet | `kb` | sheet on Knowledge | `src/features/kb/ui/components/FilterSheet.tsx` |
| `S11_question_detail` | screen | `kb` | App › QuestionDetail | `src/features/kb/ui/screens/QuestionDetailScreen.tsx` |
| `S12_add_question` | screen | `kb` | App › AddQuestion | `src/features/kb/ui/screens/AddQuestionScreen.tsx` |
| `S13_alias_insights_sheet` | sheet | `kb` | sheet on QuestionDetail | `src/features/kb/ui/components/AliasInsightsSheet.tsx (uses domain/aliasInsight.ts)` |
| `S14_move_alias_sheet` | sheet | `kb` | sheet | `src/features/kb/ui/components/MoveAliasSheet.tsx (exported; reused by history, playground)` |
| `S15_stories_prefs` | panel | `stories` | Tabs › Knowledge (segment) | `src/features/stories/ui/components/StoriesPrefsPanel.tsx (rendered by KnowledgeBaseScreen segment 2)` |
| `S16_story_editor` | screen | `stories` | App › StoryEditor | `src/features/stories/ui/screens/StoryEditorScreen.tsx` |
| `S17_preference_editor` | screen | `stories` | App › PreferenceEditor | `src/features/stories/ui/screens/PreferenceEditorScreen.tsx` |
| `S18_resume` | screen | `resume` | App › Resume | `src/features/resume/ui/screens/ResumeScreen.tsx` |
| `S19_playground` | screen | `playground` | Tabs › Playground | `src/features/playground/ui/screens/PlaygroundScreen.tsx` |
| `S19b_playground_trace` | state | `playground` | Tabs › Playground | `PlaygroundScreen (matched) + ui/components/ExplanationCard.tsx` |
| `S19c_playground_no_match` | state | `playground` | Tabs › Playground | `PlaygroundScreen (no match) + ui/components/TeachActions.tsx` |
| `S19d_playground_fix_sheet` | sheet | `playground` | sheet on Playground | `src/features/playground/ui/components/FixAnswerSheet.tsx (calls kb use cases)` |
| `S19e_playground_tech_details` | state | `playground` | Tabs › Playground | `src/features/playground/ui/components/TechnicalDetails.tsx` |
| `S20_history_list` | screen | `history` | Tabs › History | `src/features/history/ui/screens/HistoryScreen.tsx` |
| `S20b_history_empty` | state | `history` | Tabs › History | `HistoryScreen (empty state)` |
| `S21_history_session` | screen | `history` | App › SessionDetail | `src/features/history/ui/screens/SessionDetailScreen.tsx` |
| `S22_history_row_sheet` | sheet | `history` | sheet on SessionDetail | `src/features/history/ui/components/FieldActionsSheet.tsx` |
| `S23_gaps_inbox` | screen | `gaps` | Tabs › Gaps | `src/features/gaps/ui/screens/GapsScreen.tsx` |
| `S23b_gaps_empty` | state | `gaps` | Tabs › Gaps | `GapsScreen (empty state)` |
| `S24_gap_resolve_sheet` | sheet | `gaps` | sheet on Gaps | `src/features/gaps/ui/components/GapResolveSheet.tsx` |
| `S25_drawer` | navigation | `app` | Drawer content | `src/app/navigation/AppDrawerContent.tsx` |
| `S26_settings` | screen | `settings` | App › Settings | `src/features/settings/ui/screens/SettingsScreen.tsx` |
| `S26b_delete_account_dialog` | dialog | `settings` | dialog on Settings | `src/features/settings/ui/components/DeleteAccountDialog.tsx` |
| `S27_profile_usage` | screen | `subscription` | App › Profile | `src/features/subscription/ui/screens/ProfileUsageScreen.tsx` |
| `S28_upgrade` | screen | `subscription` | App › Upgrade | `src/features/subscription/ui/screens/UpgradeScreen.tsx` |
| `S29_chrome_guide` | screen | `chromeGuide` | App › ChromeGuide | `src/features/chromeGuide/ui/screens/ChromeGuideScreen.tsx` |
| `S30_af_dropdown` | native | `autofill (Kotlin)` | system autofill dropdown | `android/autofill/.../presentation/DatasetFactory.kt (RemoteViews)` |
| `S31_af_inline_chips` | native | `autofill (Kotlin)` | keyboard suggestion strip | `android/autofill/.../presentation/ (InlinePresentation)` |
| `S32_ai_answer_loading` | native | `autofill (Kotlin)` | launched by Dataset auth over Chrome | `android/autofill/.../actions/ai/AiAnswerActivity.kt (Compose)` |
| `S32b_ai_answer_answered` | native | `autofill (Kotlin)` | over Chrome | `AiAnswerActivity (answered)` |
| `S32c_ai_answer_insufficient` | native | `autofill (Kotlin)` | over Chrome | `AiAnswerActivity (insufficient_info)` |
| `S32d_ai_answer_decision` | native | `autofill (Kotlin)` | over Chrome | `AiAnswerActivity (needs_user_decision)` |
| `S33_save_for_later` | native | `autofill (Kotlin)` | over Chrome | `android/autofill/.../actions/later/SaveForLaterActivity.kt` |
