module.exports = {
  env: {
      browser: true,
    //   es6: true
  },
  extends: [
    //   'eslint:recommended',
    //   'plugin:react/recommended',
    'standard-react',
    'standard',
    // 'plugin:@typescript-eslint/eslint-recommended'
  ],
//   globals: {
//       Atomics: 'readonly',
//       SharedArrayBuffer: 'readonly'
//   },
//   parser: 'babel-eslint',
//   parserOptions: {
//       ecmaFeatures: {
//           jsx: true
//       },
//       ecmaVersion: 2018,
//       sourceType: 'module'
//   },
//   plugins: [
    //   'react',
      // '@typescript-eslint'
//   ],
  rules: {
    "no-tabs": 0,
      // indent: [
      //     'error',
      //     'tab'
      // ],
      // 'linebreak-style': [
      //     'error',
      //     'unix'
      // ],
      // quotes: [
      //     'error',
      //     'single'
      // ],
      // semi: [
      //     'error',
      //     'never'
      // ]
  }
};