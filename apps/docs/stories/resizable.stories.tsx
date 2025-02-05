import type { Meta, StoryObj } from '@storybook/react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@workspace/ui/components/resizable';

// Storybook metadata following Atomic Design
const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Molecules/ResizablePanelGroup',
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component: `
### Resizable Panel Group (Molecule)

The \`ResizablePanelGroup\` provides a flexible and customizable layout where panels can be resized dynamically.

#### Atomic Design Classification:

- **Molecule**: Composed of panels and handles, forming a resizable layout.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

// Default Resizable Panel Group
export const Default: Story = {
  render: () => (
    <ResizablePanelGroup className="h-64 w-full border" direction={'horizontal'}>
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-gray-100 p-4">
        Panel 1
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-gray-200 p-4">
        Panel 2
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Vertical Resizable Panels
export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup className="h-96 w-64 border" style={{ flexDirection: 'column' }} direction={'horizontal'}>
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-blue-100 p-4">
        Top Panel
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-blue-200 p-4">
        Bottom Panel
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

// Resizable Panel Without Handle
export const NoHandle: Story = {
  render: () => (
    <ResizablePanelGroup className="h-64 w-full border" direction={'horizontal'}>
      <ResizablePanel defaultSize={60} className="flex items-center justify-center bg-gray-100 p-4">
        Panel A
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40} className="flex items-center justify-center bg-gray-200 p-4">
        Panel B
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
