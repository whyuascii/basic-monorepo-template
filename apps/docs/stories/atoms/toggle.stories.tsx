import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, toggleVariants } from '@workspace/ui/atoms/toggle';
import { cn } from '@workspace/ui/lib/utils';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

// Storybook metadata with Atomic Design & Documentation
const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
### Toggle (Atom)

The \`Toggle\` component is a **switch-style button** used for **activating/deactivating** states, like themes, filters, or settings.

#### Atomic Design Classification:
- **Atom**: A standalone interactive component.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Default Toggle
export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};

// Toggle with Icon
export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle dark mode">
      <Sun className="size-4" />
      <Moon className="size-4 hidden dark:block" />
    </Toggle>
  ),
};

// Outline Variant
export const Outline: Story = {
  render: () => <Toggle variant="outline">Outline</Toggle>,
};

// Small Size Toggle
export const Small: Story = {
  render: () => <Toggle size="sm">Small</Toggle>,
};

// Large Size Toggle
export const Large: Story = {
  render: () => <Toggle size="lg">Large</Toggle>,
};

// Toggle with State Handling
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
};
