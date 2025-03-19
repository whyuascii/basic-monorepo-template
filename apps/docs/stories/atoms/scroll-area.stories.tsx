import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { ScrollArea, ScrollBar } from '@workspace/ui/atoms/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component: `
## 📜 ScrollArea Component (Atom)

The **\`ScrollArea\`** component provides a **customizable, accessible scrolling area** with a styled scrollbar.

### 🔹 Structure:
1️⃣ **\`ScrollArea\`** → Wraps content inside a **scrollable container**.  \n
2️⃣ **\`ScrollBar\`** → Customizable **scrollbar styling** for vertical/horizontal scrolling.  \n
3️⃣ **\`Viewport\`** → The **main content area** that scrolls inside the container.  \n

### 🔹 Features:
✅ **Custom Scrollbars** → Fully customizable **scrollbar colors & styles**.  \n
✅ **Horizontal & Vertical Scroll** → Supports **both directions** seamlessly.  \n
✅ **Dark Mode Compatible** → Adjusts to **light & dark themes** automatically.  \n
✅ **Performance Optimized** → Uses **Radix UI ScrollArea** for smooth performance.  \n
✅ **Fully Accessible** → Includes **ARIA support for screen readers**.  \n
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
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="w-60 h-40 border p-2">
      <div className="h-[300px] w-full p-4">
        <p className="text-sm">This is a scrollable area. Scroll down to see more content.</p>
        {[...Array(10).keys()].map((i) => (
          <p key={i} className="mt-2 text-xs">
            Line {i + 1}: Sample content inside a ScrollArea.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('region')).toBeVisible();
  },
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-80 h-20 border p-2">
      <div className="w-[600px] whitespace-nowrap p-2">
        This is a horizontally scrollable area. Scroll right to see more content.
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('region')).toBeVisible();
  },
};

export const Themed: Story = {
  render: () => (
    <ScrollArea className="w-60 h-40 border bg-gray-100 p-2">
      <div className="h-[300px] w-full p-4">
        <p className="text-sm">Themed scroll area with custom background.</p>
        {[...Array(8).keys()].map((i) => (
          <p key={i} className="mt-2 text-xs">
            Line {i + 1}: Sample content.
          </p>
        ))}
      </div>
      <ScrollBar className="bg-blue-500" />
    </ScrollArea>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('region')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <ScrollArea aria-label="Scrollable content area" className="w-60 h-40 border p-2">
      <div className="h-[300px] w-full p-4">
        <p className="text-sm">Accessible ScrollArea with ARIA support.</p>
        {[...Array(6).keys()].map((i) => (
          <p key={i} className="mt-2 text-xs">
            Line {i + 1}: Sample content.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('region')).toHaveAttribute('aria-label', 'Scrollable content area');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <ScrollArea className="w-60 h-40 border border-gray-700 bg-gray-800 shadow-lg">
        <div className="h-[300px] w-full p-4">
          <p className="text-sm text-gray-300">Dark mode scroll area.</p>
          {[...Array(6).keys()].map((i) => (
            <p key={i} className="mt-2 text-xs text-gray-400">
              Line {i + 1}: Sample content.
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('region')).toBeVisible();
  },
};
