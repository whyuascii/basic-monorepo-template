import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    children: {
      control: 'text',
      description: 'Avatar content or fallback text.',
    },
  },
  args: {
    children: <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />,
  },
  parameters: {
    docs: {
      description: {
        component: `
### Avatar Component (Atom)

The \`Avatar\` component is used to represent users via images, initials, or fallback content.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component representing a user entity visually.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Default avatar example
export const Default: Story = {
  args: {
    children: <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />,
  },
};

// Avatar with fallback text
export const WithFallback: Story = {
  args: {
    children: <AvatarFallback>JD</AvatarFallback>,
  },
};

// Avatar with custom size
export const CustomSize: Story = {
  args: {
    className: 'h-20 w-20',
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Large Avatar" />,
  },
};

// Avatar with broken image (testing fallback behavior)
export const BrokenImage: Story = {
  args: {
    children: <AvatarImage src="https://invalid-url.com/image.jpg" alt="Broken Image" />,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

// Avatar with custom styles
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-md',
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Styled Avatar" />,
  },
};

// Accessibility test case
export const AccessibilityTest: Story = {
  args: {
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Accessible Avatar" />,
  },
};
