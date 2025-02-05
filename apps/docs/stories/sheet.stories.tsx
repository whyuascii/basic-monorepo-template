import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@workspace/ui/components/sheet';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Sheet> = {
  title: 'Molecules/Sheet',
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component: `
### Sheet Component (Molecule)

The \`Sheet\` component is a slide-in modal used for temporary dialogs, navigation, and settings.

#### Atomic Design Classification:

- **Molecule**: Combines multiple atoms such as buttons and headings into a structured modal.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

// Default Sheet
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a description of the sheet.</SheetDescription>
        </SheetHeader>
        <div className="p-4">Sheet body content goes here.</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Sheet on the Left
export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Side Sheet</SheetTitle>
          <SheetDescription>Sliding from the left.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

// Sheet from the Bottom
export const BottomSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>Comes up from the bottom.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
