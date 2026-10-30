module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@core': './src/core',
          '@design-system': './src/design-system',
          '@features': './src/features',
        },
      },
    ],
    // Reanimated/worklets plugin must stay LAST (required by the drawer). Verify name for the installed version.
    'react-native-worklets/plugin',
  ],
};
