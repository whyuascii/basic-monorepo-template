import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@workspace/ui/atoms/spinner';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `
### Spinner Component (Atom)

The \`Spinner\` component provides a visual loading indicator for various UI elements.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component that serves as a loading indicator.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// Default spinner example
export const Default: Story = {
  render: () => <Spinner />,
};

// Small spinner
export const Small: Story = {
  render: () => <Spinner size="small" />,
};

// Large spinner
export const Large: Story = {
  render: () => <Spinner size="large" />,
};

// Muted color spinner
export const Muted: Story = {
  render: () => <Spinner color="muted" />,
};

// Horizontal spinner with text
export const Horizontal: Story = {
  render: () => <Spinner direction="horizontal">Loading...</Spinner>,
};

// Hidden spinner (to test conditional rendering)
export const Hidden: Story = {
  render: () => <Spinner show={false} />,
};

// Accessibility test
export const AccessibilityTest: Story = {
  render: () => <Spinner label="Loading data, please wait" />,
};
