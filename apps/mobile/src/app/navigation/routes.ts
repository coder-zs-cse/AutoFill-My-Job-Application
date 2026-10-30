import type { NavigatorScreenParams } from '@react-navigation/native';

/**
 * Every route and its params, in one typed place. Screen IDs in comments map to
 * design/stitch/<id>/. Bottom sheets (S06b, S10c, S13, S14, S19d, S22, S24) are NOT routes:
 * they are components owned by the screen that opens them.
 */
export type AuthStackParams = {
  SignUp: undefined; // S02
  LogIn: undefined; // S03
};

export type OnboardingStackParams = {
  Welcome: undefined; // S04
  ResumeUpload: undefined; // S05
  ImportReview: { source: 'onboarding' }; // S06
  EnableAutofill: undefined; // S07
  ChromeSetup: undefined; // S08
  Done: undefined; // S09
};

export type MainTabParams = {
  Knowledge: undefined; // S10 (+ S15 as second segment)
  History: undefined; // S20
  Gaps: undefined; // S23
  Playground: { prefillLabel?: string } | undefined; // S19
};

export type DrawerParams = {
  Tabs: NavigatorScreenParams<MainTabParams>; // S25 drawer wraps the tabs
};

export type AppStackParams = {
  Home: NavigatorScreenParams<DrawerParams>;
  QuestionDetail: { questionId: string }; // S11
  AddQuestion: { prefillLabel?: string }; // S12
  StoryEditor: { storyId?: string; kind?: string }; // S16
  PreferenceEditor: { key: string }; // S17
  Resume: undefined; // S18
  ImportReview: { source: 'resume' }; // S06
  SessionDetail: { sessionId: string }; // S21
  Settings: undefined; // S26
  Profile: undefined; // S27
  Upgrade: undefined; // S28
  ChromeGuide: undefined; // S29
};
