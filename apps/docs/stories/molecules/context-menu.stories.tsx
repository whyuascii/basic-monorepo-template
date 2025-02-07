import type { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@workspace/ui/molecules/context-menu';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof ContextMenu> = {
  title: 'Molecules/ContextMenu',
  component: ContextMenu,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `
### ContextMenu Component (Molecule)

The \`ContextMenu\` component provides a right-click menu that allows users to access additional options efficiently.

#### Atomic Design Classification:

- **Molecule**: Combines items, separators, and shortcuts to offer a contextual action menu.

#### BASIC Framework Evaluation:

- **Beauty**: Ensures a visually clean and modern design.
- **Accessibility**: Supports keyboard and screen-reader navigation.
- **Simplicity**: Provides an intuitive interface for contextual actions.
- **Intuitiveness**: Easily discoverable through right-click interaction.
- **Consistency**: Maintains uniform behavior across different components.

#### Opinionated Design Guidelines:

1. **Keyboard Navigation:** Fully navigable with keyboard controls.
2. **Customizable Options:** Provides flexibility in menu styling and behavior.
3. **Clear Separators:** Groups related items for better usability.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

// Default context menu example
export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-gray-100 cursor-pointer">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>View Profile</ContextMenuItem>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Context menu with groups and shortcuts
export const WithGroupsAndShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-gray-100 cursor-pointer">
        Right-click for grouped options
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Options</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>
            New File <ContextMenuShortcut>⌘+N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Open <ContextMenuShortcut>⌘+O</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>Settings</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Context menu with checkbox items
export const WithCheckboxItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-gray-100 cursor-pointer">
        Right-click for options
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked>Enable Notifications</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Enable Dark Mode</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Context menu with radio group
export const WithRadioGroup: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-gray-100 cursor-pointer">
        Right-click for selection
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Select Theme</ContextMenuLabel>
        <ContextMenuRadioGroup defaultValue="light">
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Custom styled context menu
export const CustomStyled: Story = {
  args: {},
  render: (args) => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-blue-100 cursor-pointer">
        Right-click for custom menu
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuItem>Custom Styled Option</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Another Option</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="p-6 border rounded-lg bg-gray-100 cursor-pointer" aria-label="Accessible menu">
        Right-click for accessible menu
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem aria-label="Profile Option">Profile</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem aria-label="Logout Option">Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
