import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@workspace/ui/components/radio-group';

// Storybook metadata following Atomic Design
const meta: Meta<typeof RadioGroup> = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
### Radio Group (Molecule)

The \`RadioGroup\` component allows users to select a single option from a list.

#### Atomic Design Classification:

- **Molecule**: A grouping of radio buttons for user selection.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Default Radio Group
export const Default: Story = {
  render: () => (
    <RadioGroup className="flex flex-col space-y-2">
      <label className="flex items-center space-x-2" htmlFor="option1">
        <RadioGroupItem id="option1" value="option1" />
        <span>Option 1</span>
      </label>
      <label className="flex items-center space-x-2" htmlFor="option2">
        <RadioGroupItem id="option2" value="option2" />
        <span>Option 2</span>
      </label>
      <label className="flex items-center space-x-2" htmlFor="option3">
        <RadioGroupItem id="option3" value="option3" />
        <span>Option 3</span>
      </label>
    </RadioGroup>
  ),
};

// Disabled Radio Group
export const Disabled: Story = {
  render: () => (
    <RadioGroup className="flex flex-col space-y-2">
      <label className="flex items-center space-x-2" htmlFor="disabled1">
        <RadioGroupItem id="disabled1" value="disabled1" disabled />
        <span className="text-muted-foreground">Disabled Option 1</span>
      </label>
      <label className="flex items-center space-x-2" htmlFor="disabled2">
        <RadioGroupItem id="disabled2" value="disabled2" disabled />
        <span className="text-muted-foreground">Disabled Option 2</span>
      </label>
    </RadioGroup>
  ),
};

// Horizontal Layout
export const Horizontal: Story = {
  render: () => (
    <RadioGroup className="flex space-x-4">
      <label className="flex items-center space-x-2" htmlFor="horizontal1">
        <RadioGroupItem id="horizontal1" value="horizontal1" />
        <span>Option 1</span>
      </label>
      <label className="flex items-center space-x-2" htmlFor="horizontal2">
        <RadioGroupItem id="horizontal2" value="horizontal2" />
        <span>Option 2</span>
      </label>
    </RadioGroup>
  ),
};
