import { dirname, join, resolve } from 'node:path';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-designs'), // Figma integration
    getAbsolutePath('@storybook/addon-measure'), // Performance tracking
    getAbsolutePath('@storybook/addon-jest'), // Jest integration
    getAbsolutePath('@chromatic-com/storybook'), // Visual testing
    getAbsolutePath('storybook-addon-grid'), // Grid overlay
    getAbsolutePath('@storybook/addon-toolbars'), // Custom toolbar buttons
    getAbsolutePath('@storybook/addon-storysource'), // Display story source code
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {
    disableTelemetry: true, // disable storybook telemetry
  },

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        ...config.define,
        'process.env.NODE_DEBUG': false,
      },
      resolve: {
        alias: [
          {
            find: 'ui',
            replacement: resolve(__dirname, '../../../packages/ui/src'),
          },
        ],
      },
    };
  },

  docs: {},
};

export default config;
