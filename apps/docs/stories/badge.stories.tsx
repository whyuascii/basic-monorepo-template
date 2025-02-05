import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@workspace/ui/components/badge';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
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
### Badge Component (Atom)

The \`Badge\` component is a small visual indicator used to convey information such as status, categories, or counts.

#### Atomic Design Classification:

- **Atom**: A simple and self-contained UI element used for status or categorization.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default badge example
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
};

// Secondary badge variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge',
  },
};

// Destructive badge variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error Badge',
  },
};

// Outline badge variant
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
    className: 'border border-gray-500',
  },
};

// Custom styled badge
export const CustomStyled: Story = {
  args: {
    className: 'bg-gradient-to-r from-purple-400 to-pink-600 text-white shadow-md',
    children: 'Custom Badge',
  },
};

// Badge with long text content
export const LongText: Story = {
  args: {
    children: 'This is a badge with a longer text content to test overflow behavior.',
  },
};

// Accessibility test case
export const AccessibilityTest: Story = {
  args: {
    children: 'Accessible Badge',
    className: 'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  },
};
