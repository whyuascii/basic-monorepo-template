import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@workspace/ui/atoms/separator';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: `
### Separator Component (Atom)

The \`Separator\` component is a simple divider used to create visual separation between UI elements.

#### Atomic Design Classification:

- **Atom**: A fundamental component that serves as a small UI building block.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

// Default Horizontal Separator
export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator />
      <p>Below the separator</p>
    </div>
  ),
};

// Vertical Separator
export const Vertical: Story = {
  render: () => (
    <div className="flex space-x-4">
      <span>Left Side</span>
      <Separator orientation="vertical" />
      <span>Right Side</span>
    </div>
  ),
};

// Themed Separator
export const Themed: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator className="bg-red-500" />
      <p>Below the separator</p>
    </div>
  ),
};
