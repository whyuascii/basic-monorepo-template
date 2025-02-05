import type { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@workspace/ui/components/command';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Command> = {
  title: 'Molecules/Command',
  component: Command,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
  },
  args: {},
  parameters: {
    docs: {
      description: {
        component: `
### Command Component (Molecule)

The \`Command\` component is a versatile command menu that allows users to search and select from a list of commands efficiently.

#### Atomic Design Classification:

- **Molecule**: Combines input, list, and command items to create an interactive command palette.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

// Default command example
export const Default: Story = {
  render: () => (
    <Command className="w-[400px] border rounded-lg shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
          <CommandItem>Item 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Command with dialog
export const WithDialog: Story = {
  args: {},
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No commands available.</CommandEmpty>
        <CommandGroup heading="Popular">
          <CommandItem>
            New File <CommandShortcut>⌘+N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Open File <CommandShortcut>⌘+O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Save File <CommandShortcut>⌘+S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};

// Command with separators
export const WithSeparators: Story = {
  render: () => (
    <Command className="w-[400px] border rounded-lg shadow-md">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandGroup heading="Files">
          <CommandItem>Open Recent</CommandItem>
          <CommandItem>New File</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>Copy</CommandItem>
          <CommandItem>Paste</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Command with custom styles
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 bg-gray-100 shadow-lg rounded-lg',
  },
  render: (args) => (
    <Command {...args}>
      <CommandInput placeholder="Search..." className="bg-white rounded-lg" />
      <CommandList>
        <CommandGroup heading="Commands">
          <CommandItem>Action 1</CommandItem>
          <CommandItem>Action 2</CommandItem>
          <CommandItem>Action 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <CommandDialog aria-label="Command Menu">
      <CommandInput placeholder="Type a command" />
      <CommandList>
        <CommandGroup heading="Common Commands">
          <CommandItem>Open Settings</CommandItem>
          <CommandItem>Go to Dashboard</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};
