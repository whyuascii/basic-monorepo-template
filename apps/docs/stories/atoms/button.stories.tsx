import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Button } from '@workspace/ui/atoms/button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
      description: 'Defines the visual style of the button.',
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
      description: 'Determines the size of the button.',
    },
    asChild: {
      control: 'boolean',
      description: 'Renders the button as a child component using Slot.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing interactions.',
    },
    children: {
      control: 'text',
      description: 'Defines the button label or content.',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click Me',
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🔘 Button (Atom)

The **\`Button\`** component is a **fundamental UI element** that enables user interactions.

### 🔹 Structure:
1️⃣ **\`Button\`** → Interactive element with **multiple styles and sizes**.

### 🔹 Features:
✅ **Multiple Variants** → Default, Destructive, Outline, Secondary, Ghost, Link.
✅ **Customizable Sizes** → Small, Default, Large, Icon.
✅ **Accessible** → Supports keyboard navigation and ARIA attributes.
✅ **Dark Mode Support** → Works across **light and dark themes**.
✅ **Hover, Focus, and Disabled States** → Ensures intuitive interactions.
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click Me');
    expect(button).toBeVisible();
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Delete')).toBeVisible();
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Outline Button')).toBeVisible();
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Secondary Button')).toBeVisible();
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Ghost Button')).toBeVisible();
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn More',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Learn More')).toBeVisible();
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔍',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Disabled');
    expect(button).toHaveAttribute('disabled');
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    // biome-ignore lint/a11y/useValidAnchor: storybook example
    children: <a href="#">Button as Link</a>,
  },
};

export const InteractiveStates = () => (
  <div className="space-y-2">
    <Button variant="default">Hover Me</Button>
    <Button variant="destructive" disabled>
      Disabled
    </Button>
    <Button variant="outline" size="lg">
      Focus Me
    </Button>
  </div>
);

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Button className="bg-gray-800 text-white border-gray-700">Dark Mode Button</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Dark Mode Button')).toBeVisible();
  },
};
