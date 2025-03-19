import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Separator } from '@workspace/ui/atoms/separator';

const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: `
## 🔹 Separator Component (Atom)

The **\`Separator\`** component is used to **create visual separation** between UI elements.

### 🔹 Structure:
1️⃣ **\`Separator\`** → A thin line that divides **sections or content blocks**.  \n
2️⃣ **\`Orientation\`** → Can be **horizontal** or **vertical**.  \n
3️⃣ **\`Decorative\`** → Can be **non-decorative** for accessibility purposes.  \n

### 🔹 Features:
✅ **Customizable** → Supports **thickness, colors, and opacity adjustments**.  \n
✅ **Vertical & Horizontal** → Works **both ways** depending on **layout needs**.  \n
✅ **Dark Mode Compatible** → Adapts to **light & dark themes**.  \n
✅ **ARIA Support** → Ensures **accessibility for screen readers**.  \n
✅ **Animated Variants** → Can **fade in/out** for smooth UI transitions.  \n
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator />
      <p>Below the separator</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toBeVisible();
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex space-x-4">
      <span>Left Side</span>
      <Separator orientation="vertical" />
      <span>Right Side</span>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toBeVisible();
  },
};

export const Themed: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator className="bg-red-500" />
      <p>Below the separator</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toBeVisible();
  },
};

export const Thick: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator className="h-2 bg-blue-500" />
      <p>Below the separator</p>
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator className="opacity-0 transition-opacity duration-500 hover:opacity-100" />
      <p>Below the separator</p>
    </div>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Above the separator</p>
      <Separator decorative={false} aria-label="Content Separator" />
      <p>Below the separator</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toHaveAttribute('aria-label', 'Content Separator');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <p className="text-white">Above the separator</p>
      <Separator className="bg-gray-700" />
      <p className="text-white">Below the separator</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator')).toBeVisible();
  },
};
