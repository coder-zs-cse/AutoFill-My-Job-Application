import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogInScreen, SignUpScreen, SplashScreen, useBootState } from '@features/auth';
import {
  ChromeSetupStepScreen,
  EnableAutofillScreen,
  OnboardingDoneScreen,
  ResumeUploadStepScreen,
  WelcomeScreen,
} from '@features/onboarding';
import { AddQuestionScreen, KnowledgeBaseScreen, QuestionDetailScreen } from '@features/kb';
import { PreferenceEditorScreen, StoryEditorScreen } from '@features/stories';
import { ResumeScreen } from '@features/resume';
import { ImportReviewScreen } from '@features/importReview';
import { PlaygroundScreen } from '@features/playground';
import { HistoryScreen, SessionDetailScreen } from '@features/history';
import { GapsScreen } from '@features/gaps';
import { SettingsScreen } from '@features/settings';
import { ProfileUsageScreen, UpgradeScreen } from '@features/subscription';
import { ChromeGuideScreen } from '@features/chromeGuide';
import type {
  AppStackParams,
  AuthStackParams,
  DrawerParams,
  MainTabParams,
  OnboardingStackParams,
} from './routes';

const Auth = createNativeStackNavigator<AuthStackParams>();
const Onboarding = createNativeStackNavigator<OnboardingStackParams>();
const App = createNativeStackNavigator<AppStackParams>();
const Drawer = createDrawerNavigator<DrawerParams>();
const Tabs = createBottomTabNavigator<MainTabParams>();

// TODO(S10/S20/S23/S19): replace default tab bar with the floating clay FloatingTabBar pattern.
function MainTabs() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Knowledge">
        {({ navigation }) => (
          <KnowledgeBaseScreen
            onOpenQuestion={id => navigation.getParent()?.getParent()?.navigate('QuestionDetail', { questionId: id })}
          />
        )}
      </Tabs.Screen>
      <Tabs.Screen name="History" component={HistoryScreen} />
      <Tabs.Screen name="Gaps" component={GapsScreen} />
      <Tabs.Screen name="Playground" component={PlaygroundScreen} />
    </Tabs.Navigator>
  );
}

// TODO(S25): custom drawerContent with Resume, Stories, Profile, Upgrade, Settings, Chrome guide.
function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Tabs" component={MainTabs} />
    </Drawer.Navigator>
  );
}

/**
 * Auth-flow pattern: we render a different navigator per boot state instead of
 * navigating between them, so "back" can never return to Log in after signing in.
 */
export function RootNavigator() {
  const boot = useBootState();

  if (boot === 'loading') return <SplashScreen />;

  if (boot === 'signedOut') {
    return (
      <Auth.Navigator screenOptions={{ headerShown: false }}>
        <Auth.Screen name="SignUp" component={SignUpScreen} />
        <Auth.Screen name="LogIn" component={LogInScreen} />
      </Auth.Navigator>
    );
  }

  if (boot === 'onboarding') {
    return (
      <Onboarding.Navigator screenOptions={{ headerShown: false }}>
        <Onboarding.Screen name="Welcome" component={WelcomeScreen} />
        <Onboarding.Screen name="ResumeUpload" component={ResumeUploadStepScreen} />
        <Onboarding.Screen name="ImportReview" component={ImportReviewScreen} />
        <Onboarding.Screen name="EnableAutofill" component={EnableAutofillScreen} />
        <Onboarding.Screen name="ChromeSetup" component={ChromeSetupStepScreen} />
        <Onboarding.Screen name="Done" component={OnboardingDoneScreen} />
      </Onboarding.Navigator>
    );
  }

  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={HomeDrawer} />
      <App.Screen name="QuestionDetail" component={QuestionDetailScreen} />
      <App.Screen name="AddQuestion" component={AddQuestionScreen} />
      <App.Screen name="StoryEditor" component={StoryEditorScreen} />
      <App.Screen name="PreferenceEditor" component={PreferenceEditorScreen} />
      <App.Screen name="Resume" component={ResumeScreen} />
      <App.Screen name="ImportReview" component={ImportReviewScreen} />
      <App.Screen name="SessionDetail" component={SessionDetailScreen} />
      <App.Screen name="Settings" component={SettingsScreen} />
      <App.Screen name="Profile" component={ProfileUsageScreen} />
      <App.Screen name="Upgrade" component={UpgradeScreen} />
      <App.Screen name="ChromeGuide" component={ChromeGuideScreen} />
    </App.Navigator>
  );
}
