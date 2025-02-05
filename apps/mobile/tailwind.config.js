const sharedConfig = require('../../packages/ui/tailwind.config');
import nativewind from 'nativewind/preset';

module.exports = {
  presets: [sharedConfig, nativewind],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}', // Include shared content
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
