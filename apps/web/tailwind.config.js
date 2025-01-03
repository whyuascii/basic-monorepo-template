const sharedConfig = require("../../packages/ui/tailwind.config");

module.exports = {
  presets: [sharedConfig],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
