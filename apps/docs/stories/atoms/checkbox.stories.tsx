import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@workspace/ui/atoms/checkbox';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox, preventing user interaction.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Determines whether the checkbox is initially checked.',
    },
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Checkbox Component (Atom)

The \`Checkbox\` component is a fundamental form element that allows users to select or deselect an option.

#### Atomic Design Classification:

- **Atom**: Represents a simple and reusable input control for form interactions.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default checkbox example
export const Default: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <label htmlFor="subscribe-checkbox" className="flex items-center gap-2">
      <Checkbox id="subscribe-checkbox" {...args} />
      <span>Subscribe to newsletter</span>
    </label>
  ),
};

// Checked by default
export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <label htmlFor="agree-checkbox" className="flex items-center gap-2">
      <Checkbox id="agree-checkbox" {...args} />
      <span>Agree to terms and conditions</span>
    </label>
  ),
};

// Disabled checkbox
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: false,
  },
  render: (args) => (
    <label htmlFor="disabled-checkbox" className="flex items-center gap-2 opacity-50">
      <Checkbox id="disabled-checkbox" {...args} />
      <span>Notifications (disabled)</span>
    </label>
  ),
};

// Custom styled checkbox
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-500 bg-gray-100',
  },
  render: (args) => (
    <label htmlFor="custom-checkbox" className="flex items-center gap-2">
      <Checkbox id="custom-checkbox" {...args} />
      <span>Custom checkbox style</span>
    </label>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <label htmlFor="accessibility-checkbox" className="flex items-center gap-2">
      <Checkbox id="accessibility-checkbox" aria-label="Accessibility checkbox" />
      <span className="sr-only">Accessible Checkbox</span>
    </label>
  ),
};
