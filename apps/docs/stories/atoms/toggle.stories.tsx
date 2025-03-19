import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Toggle, toggleVariants } from '@workspace/ui/atoms/toggle';
import { cn } from '@workspace/ui/lib/utils';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
## 🔘 Toggle Component (Atom)

The **\`Toggle\`** component is a **switch-style button** used for **activating/deactivating** states, like **themes, filters, or settings**.

### 🔹 Structure:
1️⃣ **\`Root\`** → The interactive toggle button.\n
2️⃣ **\`State Indicator\`** → Indicates whether **active or inactive**.\n
3️⃣ **\`Optional Icon\`** → Can display **icons** for better UI.\n

### 🔹 Features:
✅ **Multiple Variants** → Default, Outline, Icon, Small, Large.\n
✅ **State Handling** → Can be **controlled or uncontrolled**.\n
✅ **Keyboard & Screen Reader Accessible** → Fully **ARIA-compliant**.\n
✅ **Dark Mode Compatible** → Supports **light & dark themes**.\n
✅ **Supports Custom Styling** → Easily styled with **Tailwind or class overrides**.\n
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Default Toggle
export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeVisible();
  },
};

// Toggle with Icon (e.g., Theme Switcher)
export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle dark mode">
      <Sun className="size-4" />
      <Moon className="size-4 hidden dark:block" />
    </Toggle>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeVisible();
  },
};

// Outline Variant
export const Outline: Story = {
  render: () => <Toggle variant="outline">Outline</Toggle>,
};

// Small Toggle
export const Small: Story = {
  render: () => <Toggle size="sm">Small</Toggle>,
};

// Large Toggle
export const Large: Story = {
  render: () => <Toggle size="lg">Large</Toggle>,
};

// Toggle with Controlled State
export const WithState: Story = {
  render: function WithStateComponent() {
    const [isActive, setIsActive] = React.useState(false);

    return (
      <Toggle
        className={cn(toggleVariants({ variant: 'default', size: 'default' }))}
        data-state={isActive ? 'on' : 'off'}
        onPressedChange={setIsActive}
      >
        {isActive ? 'On' : 'Off'}
      </Toggle>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveTextContent(/On|Off/);
  },
};

// Accessibility Test
export const AccessibilityTest: Story = {
  render: () => <Toggle aria-label="Toggle accessibility test" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveAccessibleName('Toggle accessibility test');
  },
};
