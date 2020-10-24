module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'member-access': 0,
    'no-console': 'off',
    'no-unused-vars': 'error',
    'require-jsdoc': 0,
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
  },
}
  