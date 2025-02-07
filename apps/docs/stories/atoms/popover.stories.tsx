import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/atoms/button';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@workspace/ui/atoms/popover';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Popover> = {
  title: 'Atoms/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
### Popover (Atom)

The \`Popover\` component is a floating UI container that appears upon user interaction.

#### Atomic Design Classification:

- **Atom**: A standalone interactive component.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

// Default Popover Example
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent> This is a popover content. </PopoverContent>
    </Popover>
  ),
};

// Popover with Anchor
export const WithAnchor: Story = {
  render: () => (
    <Popover>
      <PopoverAnchor>
        <span className="text-sm text-muted-foreground">Popover Anchor</span>
      </PopoverAnchor>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent align="start"> This popover is anchored. </PopoverContent>
    </Popover>
  ),
};

// Popover with Custom Alignment
export const CustomAlignment: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8}>
        Right-aligned popover.
      </PopoverContent>
    </Popover>
  ),
};

// Popover with Custom Size
export const LargePopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96"> This popover is larger in width. </PopoverContent>
    </Popover>
  ),
};
