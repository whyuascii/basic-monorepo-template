import '@workspace/ui/globals.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Getting Started', 'Components', 'Atoms', 'Molecules', 'Organisms', '*'],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
