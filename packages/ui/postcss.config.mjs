/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js', // Path to the Tailwind config
    },
    autoprefixer: {},
  },
};

export default config;
