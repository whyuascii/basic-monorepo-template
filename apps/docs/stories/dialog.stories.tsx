import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Dialog> = {
  title: 'Molecules/Dialog',
  component: Dialog,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Specifies if the dialog is open by default.',
    },
  },
  args: {
    defaultOpen: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Dialog Component (Molecule)

The \`Dialog\` component provides a modal interface for presenting important information or capturing user input.

#### Atomic Design Classification:

- **Molecule**: Combines headers, content, and actions to form a functional dialog component.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Default dialog example
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg">Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Default Dialog</DialogTitle>
          <DialogDescription>This is a simple dialog with a close button.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Dialog with form elements
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-green-600 text-white rounded-lg">Open Form</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogDescription>Enter your email to subscribe to our newsletter.</DialogDescription>
        </DialogHeader>
        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md mt-4" />
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-gray-300 rounded-md">Cancel</DialogClose>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md">Subscribe</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Dialog with custom styling
export const CustomStyled: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Open Custom Dialog</DialogTrigger>
      <DialogContent className="border border-gray-400 shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle>Custom Styled Dialog</DialogTitle>
          <DialogDescription>This dialog has a custom background and border.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Dialog with accessibility test
export const AccessibilityTest: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Open Accessibility Dialog">
        Open Accessible Dialog
      </DialogTrigger>
      <DialogContent aria-label="Accessible Dialog">
        <DialogHeader>
          <DialogTitle>Accessibility Test</DialogTitle>
          <DialogDescription>Ensure this dialog is screen-reader friendly.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Dialog with long content
export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-orange-600 text-white rounded-lg">Open Long Content</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Long Content Dialog</DialogTitle>
        </DialogHeader>
        <div className="max-h-64 overflow-y-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id ligula eget nulla dapibus eleifend. Duis
            varius, urna eu scelerisque porttitor, libero magna accumsan justo, nec pharetra sapien odio et libero.
          </p>
          <p>
            Vivamus vehicula sapien id massa vulputate, in rhoncus neque faucibus. Integer varius quam et magna
            vulputate, non dignissim justo dictum.
          </p>
          <p>
            Ut euismod lacus et massa dictum, a suscipit orci tincidunt. Fusce a mauris a ligula sollicitudin auctor.
          </p>
        </div>
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
