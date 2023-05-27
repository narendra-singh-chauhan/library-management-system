module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // Use single quotes in JavaScript files
    quotes: ['error', 'single'],
    // Use double quotes in JSX files
    'jsx-quotes': ['error', 'prefer-double'],
    // Show error for unused variables
    'no-unused-vars': 'error',
    // Show warning for undefined variables
    'no-undef': 'warn',
  },
}
