// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'off', // plus nécessaire avec React 17+
      'react/react-in-jsx-scope': 'off', // plus nécessaire aussi
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
