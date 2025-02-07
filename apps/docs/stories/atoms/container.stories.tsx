import type { Meta, StoryObj } from '@storybook/react';
import Container from '@workspace/ui/atoms/container';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to be wrapped inside the container.',
      defaultValue: 'This is a container component.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Container Component (Atom)

The \`Container\` component provides a responsive layout wrapper to ensure consistent spacing and alignment across the application.

#### Atomic Design Classification:

- **Atom**: A fundamental component that serves as a layout constraint.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Default container example
export const Default: Story = {
  args: {
    children: 'This is a container with centered content.',
  },
  render: (args) => <Container {...args} />,
};

// Container with long content
export const WithLongContent: Story = {
  args: {
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id ligula eget nulla dapibus eleifend. Duis
          varius, urna eu scelerisque porttitor, libero magna accumsan justo, nec pharetra sapien odio et libero.
        </p>
      </>
    ),
  },
  render: (args) => <Container {...args} />,
};

// Custom styled container
export const CustomStyled: Story = {
  args: {
    children: 'This container has custom styles applied.',
  },
  render: (args) => <Container {...args} />,
};

// Container with dynamic content
export const DynamicContent: Story = {
  args: {
    children: (
      <ul className="list-disc pl-6">
        <li>Responsive Layout</li>
        <li>Consistent Spacing</li>
        <li>Centering Content</li>
      </ul>
    ),
  },
  render: (args) => <Container {...args} />,
};

// Accessibility test case
export const AccessibilityTest: Story = {
  args: {
    children: (
      <p className="text-lg font-bold" aria-label="Accessible container">
        Accessible Content
      </p>
    ),
  },
  render: (args) => <Container {...args} />,
};
