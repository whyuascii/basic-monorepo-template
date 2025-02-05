import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';

// Storybook metadata with Atomic Design structure
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
### Button Component (Atom)

The \`Button\` component is a fundamental UI element that enables user interaction.

#### Atomic Design Classification:

- **Atom**: The smallest building block of a UI component library.
      `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button (basic usage)
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click Me',
  },
};

// Variants Showcase (atoms)
export const Variants = () => (
  <div className="space-y-2">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);

// Sizes Showcase (atoms)
export const Sizes = () => (
  <div className="space-y-2">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">🔍</Button>
  </div>
);

// Disabled state (evaluating accessibility)
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

// Button as a child (molecule usage example)
export const AsChild: Story = {
  args: {
    asChild: true,
    // biome-ignore lint/a11y/useValidAnchor: just a storybook example
    children: <a href="#">Button as Link</a>,
  },
};

// Testing hover and focus states for intuitiveness
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
