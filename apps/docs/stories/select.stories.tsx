import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
### Select Component (Atom)

The \`Select\` component provides a user-friendly dropdown menu for selecting options.

#### Atomic Design Classification:

- **Atom**: A standalone input component for selecting values.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Default Select Component
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  ),
};

// Select with Custom Styling
export const Themed: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="bg-blue-500 text-white border-blue-600">
        <SelectValue placeholder="Choose..." />
      </SelectTrigger>
      <SelectContent className="bg-blue-100 text-blue-900">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// Select with Scrollable Items
export const Scrollable: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a long list item" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          {[...Array(20).keys()].map((i) => (
            <SelectItem key={i} value={`option-${i + 1}`}>
              Option {i + 1}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  ),
};
