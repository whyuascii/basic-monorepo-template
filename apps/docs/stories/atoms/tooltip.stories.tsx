import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@workspace/ui/atoms/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
## 💡 Tooltip Component (Atom)

The **\`Tooltip\`** component provides a **small contextual pop-up** that appears when hovering over an element.

### 🔹 Structure:
1️⃣ **\`TooltipTrigger\`** → Element that triggers the tooltip.\n
2️⃣ **\`TooltipContent\`** → Displays the tooltip content.\n
3️⃣ **\`TooltipProvider\`** → Wraps all tooltips for better UX.\n

### 🔹 Features:
✅ **Multiple Variants** → Supports **different placements (Top, Bottom, Left, Right)**.\n
✅ **Custom Styling** → Can be **styled with Tailwind or class overrides**.\n
✅ **Fully Accessible** → **ARIA support for screen readers**.\n
✅ **Light & Dark Mode Support** → Works across themes.\n
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ✅ Default Tooltip (Fixed for Storybook)
export const Default: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen>
        <TooltipTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
          Hover over me
        </TooltipTrigger>
        <TooltipContent>Default Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Default Tooltip')).toBeVisible();
  },
};

// ✅ Tooltip with different placements (Fixed)
export const PlacementVariants: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-col items-center space-y-4">
        <Tooltip defaultOpen>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Top</TooltipTrigger>
          <TooltipContent side="top">Tooltip on Top</TooltipContent>
        </Tooltip>
        <Tooltip defaultOpen>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Right</TooltipTrigger>
          <TooltipContent side="right">Tooltip on Right</TooltipContent>
        </Tooltip>
        <Tooltip defaultOpen>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Bottom</TooltipTrigger>
          <TooltipContent side="bottom">Tooltip on Bottom</TooltipContent>
        </Tooltip>
        <Tooltip defaultOpen>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Left</TooltipTrigger>
          <TooltipContent side="left">Tooltip on Left</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

// ✅ Tooltip with long content
export const LongContent: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen>
        <TooltipTrigger className="px-4 py-2 bg-orange-600 text-white rounded-lg">
          Hover over for details
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          This tooltip contains a longer piece of text that provides more context and information.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// ✅ Tooltip with custom styling
export const CustomStyled: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen>
        <TooltipTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Custom Styled</TooltipTrigger>
        <TooltipContent className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Custom Background & Style
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// ✅ Accessibility Test
export const AccessibilityTest: Story = {
  render: () => (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen>
        <TooltipTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Info Tooltip">
          Accessible Tooltip
        </TooltipTrigger>
        <TooltipContent aria-label="Additional information">Screen Reader Friendly Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Screen Reader Friendly Tooltip')).toBeVisible();
  },
};
