import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from '@workspace/ui/components/mode-toggle';

// Storybook metadata following Atomic Design
const meta: Meta<typeof ModeToggle> = {
  title: 'Atoms/ModeToggle',
  component: ModeToggle,
  parameters: {
    docs: {
      description: {
        component: `
### ModeToggle (Atom)

The \`ModeToggle\` component allows users to switch between light, dark, and system themes.

#### Atomic Design Classification:

- **Atom**: A single, self-contained unit of UI that triggers theme changes.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

// Default Mode Toggle
export const Default: Story = {
  render: () => <ModeToggle />,
};
