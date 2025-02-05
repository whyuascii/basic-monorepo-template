import type { Meta, StoryObj } from '@storybook/react';
import Image from '@workspace/ui/components/image';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'The image source URL.',
      defaultValue: 'https://via.placeholder.com/150',
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
### Image Component (Atom)

The \`Image\` component is a simple wrapper around the HTML \`<img>\` tag with additional styling.

#### Atomic Design Classification:

- **Atom**: A fundamental UI element used for displaying images.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

// Default image example
export const Default: Story = {
  render: () => <Image src="https://via.placeholder.com/150" alt="Default Image" />,
};

// Large image example
export const LargeImage: Story = {
  render: () => <Image src="https://via.placeholder.com/600" alt="Large Image" width={600} height={400} />,
};

// Image with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => <Image src="https://via.placeholder.com/300" alt="Custom Styled Image" {...args} />,
};

// Image with missing alt text (Accessibility warning)
export const NoAltText: Story = {
  render: () => <Image src="https://via.placeholder.com/200" alt="" />,
};

// Circular image example
export const CircularImage: Story = {
  render: () => <Image src="https://via.placeholder.com/150" alt="Circular Image" className="rounded-full" />,
};

// Responsive image example
export const ResponsiveImage: Story = {
  render: () => <Image src="https://via.placeholder.com/800x400" alt="Responsive Image" className="w-full h-auto" />,
};

// Accessibility test for images
export const AccessibilityTest: Story = {
  render: () => <Image src="https://via.placeholder.com/250" alt="Accessible Image Example" />,
};
