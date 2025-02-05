import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@workspace/ui/components/alert-dialog';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof AlertDialog> = {
  title: 'Molecules/AlertDialog',
  component: AlertDialog,
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the alert dialog is open or closed.',
    },
  },
  args: {
    open: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
### AlertDialog Component (Molecule)

The \`AlertDialog\` component provides a modal dialog for critical user actions like deletions or confirmations.

#### Atomic Design Classification:

- **Molecule**: Combines atoms such as buttons and text to create an interactive confirmation dialog.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

// Default alert dialog example
export const Default: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger className="bg-primary text-white px-4 py-2 rounded-md">Open Alert</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Alert dialog with a warning variant
export const Warning: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger className="bg-destructive text-white px-4 py-2 rounded-md">Delete Item</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">Warning</AlertDialogTitle>
          <AlertDialogDescription>Deleting this item is permanent. Please confirm your action.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600">Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Alert dialog with custom styles
export const CustomStyled: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="border border-gray-300 rounded-lg px-4 py-2">Open Custom Alert</AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-100 border border-gray-300 shadow-md rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-bold text-blue-600">Custom Styled Dialog</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700">
            This dialog is customized with a different look and feel.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction className="bg-blue-600 text-white">Proceed</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Testing accessibility with keyboard navigation
export const AccessibilityTest: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="bg-gray-800 text-white px-4 py-2 rounded-md">
        Accessibility Test
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Accessibility Check</AlertDialogTitle>
          <AlertDialogDescription>
            Use keyboard navigation (Tab, Enter, Esc) to test accessibility.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
