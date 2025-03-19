import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Checkbox } from '@workspace/ui/atoms/checkbox';

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
## ✅ Checkbox (Atom)

The **\`Checkbox\`** component is a fundamental **form input** used to **toggle selections**.

### 🔹 Structure:
1️⃣ **\`Checkbox\`** → Selectable element with checked, unchecked, and disabled states.

### 🔹 Features:
✅ **Checked & Unchecked States** → Allows user interaction.
✅ **Supports Disabled Mode** → Prevents changes when disabled.
✅ **Keyboard & Screen Reader Accessible** → Includes ARIA attributes.
✅ **Customizable Styling** → Tailwind or class overrides.
✅ **Dark Mode Support** → Works across light and dark themes.
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
    controls: {
      exclude: ['children'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toBeVisible();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <label htmlFor="accessibility-checkbox" className="flex items-center gap-2">
      <Checkbox id="accessibility-checkbox" aria-label="Accessibility checkbox" />
      <span className="sr-only">Accessible Checkbox</span>
    </label>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Accessibility checkbox');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <label htmlFor="dark-mode-checkbox" className="flex items-center gap-2">
        <Checkbox id="dark-mode-checkbox" />
        <span className="text-white">Dark Mode Checkbox</span>
      </label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('checkbox')).toBeVisible();
  },
};
