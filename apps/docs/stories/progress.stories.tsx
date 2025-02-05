import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@workspace/ui/components/progress';
import React from 'react';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `
### Progress Bar (Atom)

The \`Progress\` component visually represents a completion percentage.

#### Atomic Design Classification:

- **Atom**: A single UI component representing progress.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Default Progress Bar
export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => <Progress {...args} />,
};

// Full Progress
export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => <Progress {...args} />,
};

// Partial Progress
export const Partial: Story = {
  args: {
    value: 25,
  },
  render: (args) => <Progress {...args} />,
};

// Animated Progress
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
};
