import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
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
} from '@workspace/ui/molecules/alert-dialog';

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
## 🛑 AlertDialog (Molecule)

The **\`AlertDialog\`** component is a **modal dialog** used for **critical user actions** such as confirmations, deletions, and warnings.

### 🔹 Structure:
1️⃣ **\`AlertDialogTrigger\`** → Opens the dialog. \n
2️⃣ **\`AlertDialogContent\`** → The modal container.\n
3️⃣ **\`AlertDialogHeader\`** → Holds the **title & description**.\n
4️⃣ **\`AlertDialogFooter\`** → Contains **action & cancel buttons**.\n
5️⃣ **\`AlertDialogAction\`** → Confirms the action.\n
6️⃣ **\`AlertDialogCancel\`** → Cancels & closes the dialog.\n

### 🔹 Features:
✅ **Keyboard accessible** – Navigate via **Tab, Enter, and Esc**.\n
✅ **Screen reader-friendly** – Uses proper **ARIA attributes**.\n
✅ **Blocks background interactions** – Users must **confirm or cancel**.\n
✅ **Responsive** – Works seamlessly across **all screen sizes**.\n
✅ **Customizable** – Tailwind support for **easy styling**.\n

`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
    controls: {
      exclude: ['children'], // Removes unnecessary child props from Storybook controls
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Open Alert');

    await userEvent.click(trigger);
    expect(canvas.getByText('Confirm Deletion')).toBeVisible();

    await userEvent.click(canvas.getByText('Cancel'));
  },
};

export const Warning: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger className="bg-red-600 text-white px-4 py-2 rounded-md">Delete Item</AlertDialogTrigger>
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Delete Item'));
    expect(canvas.getByText('Warning')).toBeVisible();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Accessibility Test'));
    expect(canvas.getByText('Accessibility Check')).toBeVisible();

    await userEvent.keyboard('{Escape}');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <AlertDialog>
        <AlertDialogTrigger className="bg-white text-black px-4 py-2 rounded-md">Dark Mode Alert</AlertDialogTrigger>
        <AlertDialogContent className="bg-gray-800 text-white border-gray-700 shadow-md rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Dark Mode Enabled</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              This dialog is styled for dark mode environments.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-gray-700 text-white">Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
};
