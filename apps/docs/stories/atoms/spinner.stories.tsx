import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Spinner } from '@workspace/ui/atoms/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `
## ⏳ Spinner Component (Atom)

The **\`Spinner\`** component provides a **visual loading indicator** for various UI elements.

### 🔹 Structure:
1️⃣ **\`Loader\`** → The **spinning animation** indicating activity.  \n
2️⃣ **\`Text\` (Optional)** → A **description** displayed alongside the loader.  \n
3️⃣ **\`aria-live\`** → Provides **screen reader accessibility** for better UX.  \n

### 🔹 Features:
✅ **Size Variants** → Extra Small (xs), Small (sm), Medium (md), Large (lg), Extra Large (xl)  \n
✅ **Color Variants** → Primary, Secondary, Accent, Muted, White  \n
✅ **Speed Variants** → Slow (1.5s), Normal (1s), Fast (0.5s)  \n
✅ **Directional Variants** → Horizontal or Vertical  \n
✅ **Accessibility Optimized** → Supports **screen readers with aria-live="polite"**  \n
✅ **Dark Mode Compatible** → Adjusts to **light and dark themes**  \n
✅ **Customizable** → Can modify **colors, speed, text, and alignment**  \n
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
type Story = StoryObj<typeof Spinner>;

// Default Spinner
export const Default: Story = {
  render: () => <Spinner />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toBeVisible();
  },
};

// Small Spinner
export const Small: Story = {
  render: () => <Spinner size="sm" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toBeVisible();
  },
};

// Large Spinner
export const Large: Story = {
  render: () => <Spinner size="lg" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toBeVisible();
  },
};

// Muted Color Spinner
export const Muted: Story = {
  render: () => <Spinner color="muted" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toBeVisible();
  },
};

// Horizontal Spinner with Text
export const Horizontal: Story = {
  render: () => <Spinner direction="horizontal">Loading...</Spinner>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Loading...')).toBeVisible();
  },
};

// Hidden Spinner (To Test Conditional Rendering)
export const Hidden: Story = {
  render: () => <Spinner show={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert', { hidden: true })).toBeVisible();
  },
};

// Accessibility Test
export const AccessibilityTest: Story = {
  render: () => <Spinner label="Loading data, please wait" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
  },
};

// Dark Mode Support
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Spinner className="text-white" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('alert')).toBeVisible();
  },
};
