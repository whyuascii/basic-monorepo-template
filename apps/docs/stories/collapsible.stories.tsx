import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@workspace/ui/components/collapsible';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Collapsible> = {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the collapsible content is open or closed.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Specifies if the collapsible content is open by default.',
    },
  },
  args: {
    defaultOpen: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Collapsible Component (Molecule)

The \`Collapsible\` component allows content to be expanded or collapsed, improving UI organization and user experience.

#### Atomic Design Classification:

- **Molecule**: Combines atomic elements such as buttons and content to provide an interactive experience.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

// Default collapsible example
export const Default: Story = {
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
        Toggle Content
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border rounded-lg mt-2 bg-gray-100">
        <p>This is collapsible content.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Collapsible with default open state
export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">
        Always Open
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border rounded-lg mt-2 bg-gray-100">
        <p>This content is visible by default.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Collapsible with custom trigger styling
export const CustomStyled: Story = {
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full cursor-pointer">
        Custom Styled Trigger
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 border border-purple-500 rounded-lg mt-2 bg-purple-100">
        <p>Here is some custom-styled collapsible content.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Collapsible for accessibility testing
export const AccessibilityTest: Story = {
  render: () => (
    <Collapsible aria-label="Accessible Collapsible">
      <CollapsibleTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer">
        Accessible Trigger
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border rounded-lg mt-2 bg-gray-200">
        <p>Ensure keyboard and screen reader compatibility.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Collapsible with nested elements
export const NestedCollapsible: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger className="px-4 py-2 bg-orange-500 text-white rounded-lg cursor-pointer">
        Parent Collapsible
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 border rounded-lg mt-2 bg-orange-100">
        <p>This is parent content.</p>
        <Collapsible>
          <CollapsibleTrigger className="px-3 py-1 bg-orange-700 text-white rounded-lg cursor-pointer">
            Nested Collapsible
          </CollapsibleTrigger>
          <CollapsibleContent className="p-3 border rounded-lg mt-2 bg-orange-200">
            <p>This is nested content.</p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
};
