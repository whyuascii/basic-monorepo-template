const sharedConfig = require('../../packages/ui/tailwind.config');

module.exports = {
  presets: [sharedConfig],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}', // Include shared content
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
