import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { AspectRatio } from '@workspace/ui/atoms/aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/Aspect Ratio',
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
## 📐 Aspect Ratio (Atom)

The **\`Aspect Ratio\`** component ensures a consistent **width-to-height ratio** for responsive content like images, videos, or embedded media.

### 🔹 Structure:
1️⃣ Wraps child elements inside a **scalable container**.  \n
2️⃣ Ensures a **fixed aspect ratio** regardless of screen size.  \n
3️⃣ Commonly used for **videos, images, and media elements**.  \n

### 🔹 Features:
✅ Supports **any aspect ratio** – 16:9, 4:3, 1:1, etc.  \n
✅ Ensures **responsiveness** across all screen sizes.  \n
✅ Can be **custom styled** using Tailwind or custom CSS.  \n
✅ Works with **images, videos, and custom elements**.  \n
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
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: <img src="https://placehold.co/800x450" alt="16:9 Example" className="w-full h-full object-cover" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: <div className="bg-gray-300 flex items-center justify-center text-lg font-bold">1:1</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('1:1')).toBeVisible();
  },
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: <img src="https://placehold.co/600x800" alt="3:4 Example" className="w-full h-full object-cover" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('video')).toBeVisible();
  },
};

export const WithIcon: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="border border-gray-500 p-4 flex items-center justify-center">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: storybook example */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    </AspectRatio>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <div role="img" aria-label="Placeholder content">
        <img src="https://placehold.co/800x450" alt="Accessible 16:9 Example" className="w-full h-full object-cover" />
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = canvas.getByRole('img');

    expect(img).toHaveAttribute('aria-label', 'Placeholder content');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <AspectRatio ratio={16 / 9} className="bg-gray-800 border border-gray-700 p-4 flex items-center justify-center">
        <img src="https://placehold.co/800x450" alt="Dark Mode Example" className="w-full h-full object-cover" />
      </AspectRatio>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};
