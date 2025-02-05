import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### DropdownMenu Component (Molecule)

The \`DropdownMenu\` component provides a popover menu with options for navigation or actions.

#### Atomic Design Classification:

- **Molecule**: Combines a trigger, menu items, and separators to create a functional dropdown.

#### BASIC Framework Evaluation:

- **Beauty**: Clean design with smooth transitions.
- **Accessibility**: Supports keyboard navigation and ARIA attributes.
- **Simplicity**: Minimalistic design for easy implementation.
- **Intuitiveness**: Provides a clear selection mechanism.
- **Consistency**: Ensures uniform behavior across different menus.

#### Opinionated Design Guidelines:

1. **Keyboard Navigation:** Fully accessible via keyboard.
2. **Grouped Actions:** Uses separators for improved clarity.
3. **Customizable Items:** Supports checkboxes, radio buttons, and shortcuts.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// Default dropdown menu example
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg">Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown menu with groups and shortcuts
export const WithGroupsAndShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-green-600 text-white rounded-lg">
        Grouped Options
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            New File <DropdownMenuShortcut>⌘+N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Open File <DropdownMenuShortcut>⌘+O</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown menu with checkbox items
export const WithCheckboxItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-gray-600 text-white rounded-lg">Select Options</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked>Enable Notifications</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Enable Dark Mode</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown menu with radio group
export const WithRadioGroup: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-orange-600 text-white rounded-lg">Select Theme</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup defaultValue="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Custom styled dropdown menu
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-purple-600 text-white rounded-lg">Custom Menu</DropdownMenuTrigger>
      <DropdownMenuContent {...args}>
        <DropdownMenuItem>Styled Option</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Another Option</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown menu with accessibility test
export const AccessibilityTest: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-gray-700 text-white rounded-lg" aria-label="Open Accessible Menu">
        Accessible Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem aria-label="Profile Option">Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem aria-label="Logout Option">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
