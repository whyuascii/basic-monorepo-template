import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area';

// Storybook metadata following Atomic Design
const meta: Meta<typeof ScrollArea> = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component: `
### ScrollArea Component (Atom)

The \`ScrollArea\` component provides a customizable, accessible scrolling area with a styled scrollbar.

#### Atomic Design Classification:

- **Atom**: A fundamental UI building block for scrollable containers.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

// Default ScrollArea Component
export const Default: Story = {
  render: () => (
    <ScrollArea className="w-60 h-40 border p-2">
      <div className="h-[300px] w-full p-4">
        <p className="text-sm">This is a scrollable area. Scroll down to see more content.</p>
        {[...Array(10).keys()].map((i) => (
          <p key={i} className="mt-2 text-xs">
            Line {i + 1}: Sample content inside a ScrollArea.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

// ScrollArea with Horizontal Scroll
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-80 h-20 border p-2">
      <div className="w-[600px] whitespace-nowrap p-2">
        This is a horizontally scrollable area. Scroll right to see more content.
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

// ScrollArea with Custom Styling
export const Themed: Story = {
  render: () => (
    <ScrollArea className="w-60 h-40 border bg-gray-100 p-2">
      <div className="h-[300px] w-full p-4">
        <p className="text-sm">Themed scroll area with custom background.</p>
        {[...Array(8).keys()].map((i) => (
          <p key={i} className="mt-2 text-xs">
            Line {i + 1}: Sample content.
          </p>
        ))}
      </div>
      <ScrollBar className="bg-blue-500" />
    </ScrollArea>
  ),
};
