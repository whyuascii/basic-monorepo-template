import sharedConfig from '@workspace/eslint-config';

export default [
  ...sharedConfig,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
];
