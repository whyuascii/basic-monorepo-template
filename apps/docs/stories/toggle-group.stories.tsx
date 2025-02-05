import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '@workspace/ui/components/toggle-group';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof ToggleGroup> = {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'destructive'],
      description: 'Defines the visual style of the toggle group items.',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Sets the size of the toggle group items.',
      defaultValue: 'default',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for additional styling.',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Defines whether single or multiple selections are allowed.',
      defaultValue: 'single',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### ToggleGroup Component (Molecule)

The \`ToggleGroup\` component allows users to toggle between options, either selecting one or multiple choices.

#### Atomic Design Classification:

- **Molecule**: Combines multiple toggle items into a group with shared state.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

// Default toggle group example
export const Default: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Toggle group with multiple selection
export const MultipleSelection: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="optionA">Option A</ToggleGroupItem>
      <ToggleGroupItem value="optionB">Option B</ToggleGroupItem>
      <ToggleGroupItem value="optionC">Option C</ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Toggle group with different variants
export const VariantStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <ToggleGroup type="single" variant="default">
        <ToggleGroupItem value="default1">Default</ToggleGroupItem>
        <ToggleGroupItem value="default2">Default</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="outline1">Outline</ToggleGroupItem>
        <ToggleGroupItem value="outline2">Outline</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" variant="destructive">
        <ToggleGroupItem value="destructive1">Destructive</ToggleGroupItem>
        <ToggleGroupItem value="destructive2">Destructive</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

// Toggle group with different sizes
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="small">Small</ToggleGroupItem>
        <ToggleGroupItem value="small">Small</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="default">Default</ToggleGroupItem>
        <ToggleGroupItem value="default">Default</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="large">Large</ToggleGroupItem>
        <ToggleGroupItem value="large">Large</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

// Toggle group with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => (
    <ToggleGroup type="single" {...args}>
      <ToggleGroupItem value="custom">Custom Styled</ToggleGroupItem>
      <ToggleGroupItem value="custom">Custom Styled</ToggleGroupItem>
    </ToggleGroup>
  ),
};

// Accessibility test for toggle group
export const AccessibilityTest: Story = {
  render: () => (
    <ToggleGroup type="single" aria-label="Toggle Group Example">
      <ToggleGroupItem value="accessible" aria-label="Toggle Option 1">
        Accessible 1
      </ToggleGroupItem>
      <ToggleGroupItem value="accessible" aria-label="Toggle Option 2">
        Accessible 2
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
