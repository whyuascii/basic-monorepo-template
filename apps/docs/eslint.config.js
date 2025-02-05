import sharedConfig from '@workspace/eslint-config';

export default [
  ...sharedConfig,

  // App-specific overrides for `web`
  {
    files: ['**/*.tsx', '**/*.jsx'],
  },
];
