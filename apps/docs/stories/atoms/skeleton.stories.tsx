import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Skeleton } from '@workspace/ui/atoms/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: `
## 🔹 Skeleton Component (Atom)

The **\`Skeleton\`** component provides a **placeholder UI** while content is loading.

### 🔹 Structure:
1️⃣ **\`Skeleton\`** → A **shimmering block** that mimics content loading.  \n
2️⃣ **\`Width & Height\`** → Can be adjusted to **match different UI elements**.  \n
3️⃣ **\`Border Radius\`** → Supports **rounded avatars, buttons, or cards**.  \n

### 🔹 Features:
✅ **Highly Customizable** → Can be used for **text, images, avatars, cards, etc.**  \n
✅ **Supports Animations** → Uses **shimmer effects** for realism.  \n
✅ **Dark Mode Compatible** → Adjusts to **light and dark themes**.  \n
✅ **ARIA Support** → Improves **accessibility and screen reader compatibility**.  \n
✅ **Optimized Performance** → Uses **minimal styles for smooth rendering**.  \n
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
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className="w-32 h-8" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const TextPlaceholder: Story = {
  render: () => <Skeleton className="w-48 h-4" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const AvatarPlaceholder: Story = {
  render: () => <Skeleton className="w-12 h-12 rounded-full" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const CardPlaceholder: Story = {
  render: () => <Skeleton className="w-64 h-40" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const Themed: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="w-32 h-8 bg-blue-300" />
      <Skeleton className="w-48 h-4 bg-red-300" />
      <Skeleton className="w-12 h-12 rounded-full bg-green-300" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const Animated: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="w-48 h-4 animate-pulse" />
      <Skeleton className="w-32 h-8 animate-bounce" />
      <Skeleton className="w-12 h-12 rounded-full animate-pulse" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Skeleton className="w-32 h-8 bg-gray-700" />
      <Skeleton className="w-48 h-4 bg-gray-600" />
      <Skeleton className="w-12 h-12 rounded-full bg-gray-500" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('status')).toBeVisible();
  },
};
