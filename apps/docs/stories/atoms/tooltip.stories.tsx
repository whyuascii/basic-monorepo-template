import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@workspace/ui/atoms/tooltip';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    sideOffset: {
      control: 'number',
      description: 'Defines the offset distance of the tooltip from the trigger.',
      defaultValue: 4,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Tooltip Component (Atom)

The \`Tooltip\` component provides a small, contextual pop-up that appears when hovering over an element.

#### Atomic Design Classification:

- **Atom**: Represents a small UI element that provides additional context to users.  `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Default tooltip example
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
          Hover over me
        </TooltipTrigger>
        <TooltipContent>Default Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Tooltip with different placement options
export const PlacementVariants: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-col items-center space-y-4">
        <Tooltip>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Top</TooltipTrigger>
          <TooltipContent side="top">Tooltip on Top</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Right</TooltipTrigger>
          <TooltipContent side="right">Tooltip on Right</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Bottom</TooltipTrigger>
          <TooltipContent side="bottom">Tooltip on Bottom</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Left</TooltipTrigger>
          <TooltipContent side="left">Tooltip on Left</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

// Tooltip with long content
export const LongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
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

// Tooltip with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg',
  },
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Custom Styled</TooltipTrigger>
        <TooltipContent {...args}>Custom Background & Style</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Accessibility test for tooltips
export const AccessibilityTest: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Info Tooltip">
          Accessible Tooltip
        </TooltipTrigger>
        <TooltipContent aria-label="Additional information">Screen Reader Friendly Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
