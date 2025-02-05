import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@workspace/ui/components/skeleton';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: `
### Skeleton Component (Atom)

The \`Skeleton\` component serves as a placeholder UI element while content is loading.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component used to indicate loading states.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Default skeleton
export const Default: Story = {
  render: () => <Skeleton className="w-32 h-8" />,
};

// Skeleton for text placeholder
export const TextPlaceholder: Story = {
  render: () => <Skeleton className="w-48 h-4" />,
};

// Skeleton for avatar placeholder
export const AvatarPlaceholder: Story = {
  render: () => <Skeleton className="w-12 h-12 rounded-full" />,
};

// Skeleton for card placeholder
export const CardPlaceholder: Story = {
  render: () => <Skeleton className="w-64 h-40" />,
};
