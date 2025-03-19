import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Image from '@workspace/ui/atoms/image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'The image source URL.',
      defaultValue: 'https://placehold.co/150',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image.',
      defaultValue: 'Placeholder image',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for additional styling.',
    },
    width: {
      control: 'number',
      description: 'Width of the image.',
      defaultValue: 150,
    },
    height: {
      control: 'number',
      description: 'Height of the image.',
      defaultValue: 150,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🖼️ Image (Atom)

The **\`Image\`** component is a **wrapper** around the standard **\`<img>\` tag**, providing additional styling and responsive support.

### 🔹 Structure:
1️⃣ **\`src\`** → Defines the **image source**. \n
2️⃣ **\`alt\`** → Provides **alternative text** for accessibility. \n
3️⃣ **\`className\`** → Allows **custom styling** via Tailwind or CSS. \n
4️⃣ **\`width & height\`** → Defines the **image dimensions**. \n

### 🔹 Features:
✅ **Responsive Support** → Adapts to various screen sizes.  \n
✅ **Customizable Styling** → Supports additional **CSS classes**.  \n
✅ **Accessibility Compliant** → Includes **alt text** for screen readers.  \n
✅ **Supports Circular & Rounded Shapes** → Can be **styled as a circle**.  \n
✅ **Optimized Performance** → Uses **lazy loading & smooth transitions**.  \n
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
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/150',
    alt: 'Default Image',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const LargeImage: Story = {
  args: {
    src: 'https://placehold.co/600',
    alt: 'Large Image',
    width: 600,
    height: 400,
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    src: 'https://placehold.co/300',
    alt: 'Custom Styled Image',
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const NoAltText: Story = {
  args: {
    src: 'https://placehold.co/200',
    alt: '',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const CircularImage: Story = {
  args: {
    src: 'https://placehold.co/150',
    alt: 'Circular Image',
    className: 'rounded-full',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const ResponsiveImage: Story = {
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Responsive Image',
    className: 'w-full h-auto',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    src: 'https://placehold.co/250',
    alt: 'Accessible Image Example',
  },
  render: (args) => <Image {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = canvas.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Accessible Image Example');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Image src="https://placehold.co/250" alt="Dark Mode Image" className="border-gray-700 bg-gray-800" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};
