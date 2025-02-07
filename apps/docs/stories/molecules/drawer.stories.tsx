import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@workspace/ui/molecules/drawer';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    shouldScaleBackground: {
      control: 'boolean',
      description: 'Determines if the background should scale when the drawer opens.',
      defaultValue: true,
    },
  },
  args: {
    shouldScaleBackground: true,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Drawer Component (Molecule)

The \`Drawer\` component provides a slide-up panel for displaying additional content, navigation, or actions.

#### Atomic Design Classification:

- **Molecule**: Combines a trigger, content, and footer to create a functional drawer component.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Default drawer example
export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg">Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Default Drawer</DrawerTitle>
          <DrawerDescription>This is a simple drawer with a close button.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// Drawer with form elements
export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-green-600 text-white rounded-lg">Open Form</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Sign Up</DrawerTitle>
          <DrawerDescription>Enter your details to create an account.</DrawerDescription>
        </DrawerHeader>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md mt-4" />
        <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md mt-2" />
        <DrawerFooter>
          <DrawerClose className="px-3 py-2 bg-gray-300 rounded-md">Cancel</DrawerClose>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md">Sign Up</button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// Drawer with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Open Custom Drawer</DrawerTrigger>
      <DrawerContent {...args}>
        <DrawerHeader>
          <DrawerTitle>Custom Styled Drawer</DrawerTitle>
          <DrawerDescription>This drawer has a custom background and border.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// Drawer with accessibility test
export const AccessibilityTest: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Open Accessibility Drawer">
        Open Accessible Drawer
      </DrawerTrigger>
      <DrawerContent aria-label="Accessible Drawer">
        <DrawerHeader>
          <DrawerTitle>Accessibility Test</DrawerTitle>
          <DrawerDescription>Ensure this drawer is screen-reader friendly.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

// Drawer with long content
export const LongContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="px-4 py-2 bg-orange-600 text-white rounded-lg">Open Long Content</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Long Content Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="max-h-64 overflow-y-auto p-4">
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
        <DrawerFooter>
          <DrawerClose className="px-3 py-2 bg-gray-300 rounded-md">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
