import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@workspace/ui/components/accordion';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
      description: 'Specifies whether the accordion allows multiple or single expanded items.',
    },
    collapsible: {
      control: 'boolean',
      description: 'Allows all items to be collapsed when true.',
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Accordion Component (Molecule)

The \`Accordion\` component is a UI element used to display content in a collapsible manner.
It consists of **AccordionItem**, **AccordionTrigger**, and **AccordionContent**, forming a reusable structure.

#### Atomic Design Classification:

- **Molecule**: Combines smaller atoms (text, icons) to create an interactive expandable/collapsible unit.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default accordion example
export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Accordion with multiple open sections
export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Collapsible Accordion
export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Collapsible Section</AccordionTrigger>
        <AccordionContent>This section can collapse completely.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Accordion with custom styling (testing aesthetics)
export const CustomStyled: Story = {
  render: () => (
    <Accordion type="single" className="border border-gray-300 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold text-blue-600">Custom Styled Section</AccordionTrigger>
        <AccordionContent className="text-gray-700">Custom styling applied to content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Testing accessibility with keyboard navigation
export const AccessibilityTest: Story = {
  render: () => (
    <Accordion type="single" className="border border-gray-300 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accessible Section</AccordionTrigger>
        <AccordionContent>Check keyboard navigation and screen reader support.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
