import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Badge } from '@workspace/ui/atoms/badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'warning', 'success', 'info', 'outline'],
      control: { type: 'select' },
      description: 'Defines the visual style of the badge.',
    },
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    children: {
      control: 'text',
      description: 'Badge content.',
    },
  },
  args: {
    variant: 'default',
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🎖️ Badge (Atom)

The **\`Badge\`** component is a **small visual indicator** used to highlight statuses, categories, or counts.

### 🔹 Structure:
1️⃣ **\`Badge\`** → Displays a **status label** with various color variants.

### 🔹 Features:
✅ **Multiple Variants** → Default, Secondary, Destructive, Warning, Success, Info, Outline.
✅ **Customizable** → Can be styled using Tailwind or class overrides.
✅ **Accessible** → Includes ARIA attributes and focus styles.

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
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Default Badge')).toBeVisible();
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Secondary Badge')).toBeVisible();
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Error Badge')).toBeVisible();
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Warning Badge')).toBeVisible();
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Success Badge')).toBeVisible();
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Info Badge')).toBeVisible();
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
    className: 'border border-gray-500',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Outline Badge')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'bg-gradient-to-r from-purple-400 to-pink-600 text-white shadow-md',
    children: 'Custom Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Custom Badge')).toBeVisible();
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a badge with a longer text content to test overflow behavior.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('This is a badge with a longer text content to test overflow behavior.')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    children: 'Accessible Badge',
    className: 'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Accessible Badge')).toBeVisible();
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Badge className="bg-gray-700 text-white border-gray-600">Dark Mode Badge</Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Dark Mode Badge')).toBeVisible();
  },
};
