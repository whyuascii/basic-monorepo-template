import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@workspace/ui/components/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description: 'Specifies the width-to-height ratio of the content.',
      defaultValue: 16 / 9,
    },
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed within the aspect ratio container.',
    },
  },
  args: {
    ratio: 16 / 9,
  },
  parameters: {
    docs: {
      description: {
        component: `
### AspectRatio Component (Atom)

The \`AspectRatio\` component ensures consistent aspect ratios for responsive content such as images and videos.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component that provides structure to media content.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

// Default aspect ratio example
export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img src="https://via.placeholder.com/800x450" alt="16:9 Example" className="w-full h-full object-cover" />
    ),
  },
};

// Aspect ratio for square content
export const Square: Story = {
  args: {
    ratio: 1,
    children: <div className="bg-gray-300 flex items-center justify-center text-lg font-bold">1:1</div>,
  },
};

// Aspect ratio for portrait content
export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: (
      <img src="https://via.placeholder.com/600x800" alt="3:4 Example" className="w-full h-full object-cover" />
    ),
  },
};

// Custom aspect ratio with responsive styles
export const Responsive: Story = {
  args: {
    ratio: 4 / 3,
    className: 'border border-gray-400',
    children: (
      <video className="w-full h-full object-cover" src="https://www.w3schools.com/html/mov_bbb.mp4" controls>
        <track kind="captions" src="https://www.w3schools.com/html/mov_bbb.vtt" srcLang="en" label="English" default />
      </video>
    ),
  },
};

// Accessibility test case
export const AccessibilityTest: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <div role="img" aria-label="Placeholder content">
        <img
          src="https://via.placeholder.com/800x450"
          alt="Accessible 16:9 Example"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
};
