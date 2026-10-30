/**
 * PUBLIC API of the auth feature. Sign up, log in, session gate on boot, log out.
 * Replace each placeholder with the real screen from ui/screens/ as it is built.
 */
import { createScreenPlaceholder } from '@design-system';

export const SplashScreen = createScreenPlaceholder('S01_splash');
export const SignUpScreen = createScreenPlaceholder('S02_sign_up');
export const LogInScreen = createScreenPlaceholder('S03_log_in');
export { useBootState, type BootState } from './application/useBootState';
