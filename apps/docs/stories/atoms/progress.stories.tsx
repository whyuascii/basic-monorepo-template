import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Progress } from '@workspace/ui/atoms/progress';
import React from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `
## 📊 Progress Bar (Atom)

The **\`Progress\`** component visually represents a **completion percentage** for tasks or processes.

### 🔹 Structure:
1️⃣ **\`Progress\`** → Root container for the progress bar.  \n
2️⃣ **\`Progress.Indicator\`** → Fills the bar based on the percentage.  \n

### 🔹 Features:
✅ **Dynamic Progress Updates** → Supports real-time updates for loading states.  \n
✅ **Customizable Styles** → Tailwind-based classes for easy styling.  \n
✅ **Gradient Animation** → Smooth transitions for progress changes.  \n
✅ **Dark Mode Support** → Adapts to both **light and dark themes**.  \n
✅ **Fully Accessible** → Screen reader & ARIA support included.  \n
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
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => <Progress {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeVisible();
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => <Progress {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeVisible();
  },
};

export const Partial: Story = {
  args: {
    value: 25,
  },
  render: (args) => <Progress {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeVisible();
  },
};

export const Animated: Story = {
  render: () => {
    function AnimatedProgress() {
      const [progress, setProgress] = React.useState(0);

      React.useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 1000);
        return () => clearInterval(interval);
      }, []);

      return <Progress value={progress} />;
    }

    return <AnimatedProgress />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => <Progress value={75} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Progress value={40} className="bg-gray-800 border-gray-700 shadow-lg" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeVisible();
  },
};
