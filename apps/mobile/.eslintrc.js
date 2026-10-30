/**
 * Architecture is enforced here, not just documented. Three rules:
 * 1. Features import other features ONLY through their public index ('@features/x').
 * 2. Inside a feature: ui -> application -> domain <- data. domain imports nothing app-specific.
 * 3. core and design-system never import features (they are below features).
 */
const noDeepFeatureImports = {
  group: ['@features/*/*', '**/features/*/*'],
  message: "Import a feature through its public API ('@features/<name>'), not its internals.",
};

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': ['error', { patterns: [noDeepFeatureImports] }],
    // Themed values are dynamic, so inline styles are allowed; hoist static ones to StyleSheet.create.
    'react-native/no-inline-styles': 'off',
  },
  overrides: [
    {
      files: ['src/features/*/domain/**'],
      rules: {
        'no-restricted-imports': ['error', {
          patterns: [noDeepFeatureImports,
            { group: ['react', 'react-native', '@tanstack/*', '@core', '@design-system', '**/data/**', '**/application/**', '**/ui/**'],
              message: 'domain/ is pure TypeScript: types, ports and rules only.' }],
        }],
      },
    },
    {
      files: ['src/features/*/data/**'],
      rules: {
        'no-restricted-imports': ['error', {
          patterns: [noDeepFeatureImports,
            { group: ['react', 'react-native', '**/application/**', '**/ui/**', '@design-system'],
              message: 'data/ implements domain ports; it knows nothing about React or screens.' }],
        }],
      },
    },
    {
      files: ['src/features/*/application/**'],
      rules: {
        'no-restricted-imports': ['error', {
          patterns: [noDeepFeatureImports,
            { group: ['**/ui/**', '@design-system'], message: 'application/ must not depend on UI.' }],
        }],
      },
    },
    {
      files: ['src/core/**', 'src/design-system/**'],
      rules: {
        'no-restricted-imports': ['error', {
          patterns: [{ group: ['@features/*', '**/features/**', '**/app/**'],
            message: 'core and design-system sit below features and must not import them.' }],
        }],
      },
    },
  ],
};
