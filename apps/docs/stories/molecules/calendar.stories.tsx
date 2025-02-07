import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@workspace/ui/molecules/calendar';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Calendar> = {
  title: 'Molecules/Calendar',
  component: Calendar,
  argTypes: {
    mode: {
      options: ['single', 'multiple', 'range'],
      control: { type: 'select' },
      description: 'Determines the selection mode of the calendar.',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from the previous and next month.',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
  },
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Calendar Component (Molecule)

The \`Calendar\` component is used for date selection in single, multiple, and range modes.

#### Atomic Design Classification:

- **Molecule**: Combines atomic elements such as buttons and labels to form an interactive calendar.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Default calendar example (single date selection)
export const Default: Story = {
  args: {
    mode: 'single',
  },
};

// Calendar with multiple date selection
export const MultipleSelection: Story = {
  args: {
    mode: 'multiple',
  },
};

// Calendar with range selection
export const RangeSelection: Story = {
  args: {
    mode: 'range',
  },
};

// Calendar with hidden outside days
export const WithoutOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
};

// Custom styled calendar
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-300 rounded-lg p-4 shadow-md',
  },
  render: (args) => <Calendar {...args} />,
};

// Accessibility test case
export const AccessibilityTest: Story = {
  args: {
    className: 'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  },
};
