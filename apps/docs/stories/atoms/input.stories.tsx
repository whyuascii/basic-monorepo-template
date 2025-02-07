import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@workspace/ui/atoms/input';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
### Input (Atom)

The \`Input\` component is a **form field** with built-in styling, accessibility, and usability enhancements.

#### Atomic Design Classification:

- **Atom**: A foundational input field used in forms.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default Input Example
export const Default: Story = {
  render: () => <Input type="text" placeholder="Enter text..." />,
};

// Disabled Input Example
export const Disabled: Story = {
  render: () => <Input type="text" placeholder="Disabled input" disabled />,
};

// Password Input Example
export const Password: Story = {
  render: () => <Input type="password" placeholder="Enter password" />,
};

// Number Input Example
export const NumberInput: Story = {
  render: () => <Input type="number" placeholder="Enter a number" />,
};

// File Input Example
export const FileUpload: Story = {
  render: () => <Input type="file" />,
};
