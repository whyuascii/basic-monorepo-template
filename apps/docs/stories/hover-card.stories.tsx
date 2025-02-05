import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@workspace/ui/components/hover-card';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof HoverCard> = {
  title: 'Molecules/HoverCard',
  component: HoverCard,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Controls alignment of the hover card content.',
      defaultValue: 'center',
    },
    sideOffset: {
      control: 'number',
      description: 'Defines the offset distance of the hover card from the trigger.',
      defaultValue: 4,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### HoverCard Component (Molecule)

The \`HoverCard\` component displays additional information when hovering over an element.

#### Atomic Design Classification:

- **Molecule**: Combines a trigger and popover content to provide contextual information.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

// Default hover card example
export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
        Hover over me
      </HoverCardTrigger>
      <HoverCardContent>Default Hover Card Content</HoverCardContent>
    </HoverCard>
  ),
};

// Hover card with different alignments
export const WithAlignment: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <HoverCard>
        <HoverCardTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Align Start</HoverCardTrigger>
        <HoverCardContent align="start">Content aligned to start</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Align Center</HoverCardTrigger>
        <HoverCardContent align="center">Content aligned to center</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Align End</HoverCardTrigger>
        <HoverCardContent align="end">Content aligned to end</HoverCardContent>
      </HoverCard>
    </div>
  ),
};

// Hover card with additional spacing
export const WithOffset: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="px-4 py-2 bg-green-600 text-white rounded-lg">Hover with Offset</HoverCardTrigger>
      <HoverCardContent sideOffset={10}>Increased Offset Distance</HoverCardContent>
    </HoverCard>
  ),
};

// Hover card with a detailed preview
export const DetailedPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="px-4 py-2 bg-orange-600 text-white rounded-lg">Hover for Details</HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="font-medium">User Profile</div>
        <p className="text-sm text-muted-foreground">
          This user has been a member since 2021 and is an active contributor to the community.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Hover card with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg bg-purple-600 text-white p-4',
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Custom Styled</HoverCardTrigger>
      <HoverCardContent {...args}>Custom Background & Styling</HoverCardContent>
    </HoverCard>
  ),
};

// Accessibility test for hover cards
export const AccessibilityTest: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Hover Card">
        Accessible Hover Card
      </HoverCardTrigger>
      <HoverCardContent aria-label="Additional Information">Screen Reader Friendly Hover Card Content</HoverCardContent>
    </HoverCard>
  ),
};
