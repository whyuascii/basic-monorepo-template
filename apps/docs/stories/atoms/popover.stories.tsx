import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Button } from '@workspace/ui/atoms/button';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@workspace/ui/atoms/popover';

const meta: Meta<typeof Popover> = {
  title: 'Atoms/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
## 📌 Popover (Atom)

The **\`Popover\`** component is a **floating UI container** that appears when a user interacts with an element.

### 🔹 Structure:
1️⃣ **\`PopoverTrigger\`** → Element that triggers the popover.  \n
2️⃣ **\`PopoverContent\`** → The floating content that appears upon interaction.  \n
3️⃣ **\`PopoverAnchor\`** → An optional anchor for positioning.  \n

### 🔹 Features:
✅ **Floating UI Element** → Appears dynamically upon interaction.  \n
✅ **Fully Accessible** → Supports keyboard navigation & ARIA roles.  \n
✅ **Customizable Positioning** → Align to left, right, center, or custom offsets.  \n
✅ **Dark Mode Compatible** → Works well in both **light and dark themes**.  \n
✅ **Animation Support** → Includes **smooth fade & scale effects**.  \n
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
    controls: {
      exclude: ['children'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent> This is a popover content. </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Click Me' });
    expect(button).toBeVisible();
  },
};

export const WithAnchor: Story = {
  render: () => (
    <Popover>
      <PopoverAnchor>
        <span className="text-sm text-muted-foreground">Popover Anchor</span>
      </PopoverAnchor>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent align="start"> This popover is anchored. </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Popover Anchor')).toBeVisible();
  },
};

export const CustomAlignment: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8}>
        Right-aligned popover.
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Right-aligned popover.')).toBeVisible();
  },
};

export const LargePopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96"> This popover is larger in width. </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('This popover is larger in width.')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" aria-label="Popover trigger">
          Accessible Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent aria-live="polite"> This popover is accessible. </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Accessible Popover' });
    expect(button).toHaveAttribute('aria-label', 'Popover trigger');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Click Me</Button>
        </PopoverTrigger>
        <PopoverContent className="bg-gray-800 text-white border-gray-700 shadow-xl">Dark Mode Popover</PopoverContent>
      </Popover>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Dark Mode Popover')).toBeVisible();
  },
};
