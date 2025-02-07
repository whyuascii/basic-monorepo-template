import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@workspace/ui/atoms/textarea';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
### Textarea Component (Atom)

The \`Textarea\` component provides a multi-line input field for users.

#### Atomic Design Classification:

- **Atom**: A fundamental UI element for text input.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Default textarea example
export const Default: Story = {
  render: () => <Textarea placeholder="Enter your text here..." />,
};

// Disabled textarea example
export const Disabled: Story = {
  render: () => <Textarea placeholder="Disabled input" disabled />,
};

// Textarea with a predefined value
export const WithValue: Story = {
  render: () => <Textarea defaultValue="This is a pre-filled textarea." />,
};

// Resizable textarea example
export const Resizable: Story = {
  render: () => <Textarea placeholder="Resizable text area" className="resize" />,
};

// Accessibility test for textareas
export const AccessibilityTest: Story = {
  render: () => <Textarea aria-label="Accessible Textarea Example" placeholder="Type something..." />,
};
