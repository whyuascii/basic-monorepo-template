import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Container from '@workspace/ui/atoms/container';

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
## 📦 Container (Atom)

The **\`Container\`** component provides a **responsive layout wrapper** to ensure **consistent spacing and alignment**.

### 🔹 Structure:
1️⃣ **\`Container\`** → Wraps content inside a **centered, constrained layout**.

### 🔹 Features:
✅ **Responsive Layout** → Adapts to different screen sizes.\n
✅ **Consistent Spacing** → Ensures proper padding and alignment.\n
✅ **Supports Dynamic Content** → Can wrap various UI elements.\n
✅ **Customizable Styling** → Tailwind and class overrides supported.\n
✅ **Dark Mode Support** → Adjusts styles for dark-themed applications.\n
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'This is a container with centered content.',
  },
  render: (args) => <Container {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('This is a container with centered content.')).toBeVisible();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Lorem ipsum/)).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    children: 'This container has custom styles applied.',
  },
  render: (args) => <Container {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('This container has custom styles applied.')).toBeVisible();
  },
};

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Responsive Layout')).toBeVisible();
    expect(canvas.getByText('Consistent Spacing')).toBeVisible();
    expect(canvas.getByText('Centering Content')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    children: (
      <p className="text-lg font-bold" aria-label="Accessible container">
        Accessible Content
      </p>
    ),
  },
  render: (args) => <Container {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const content = canvas.getByText('Accessible Content');
    expect(content).toBeVisible();
    expect(content).toHaveAttribute('aria-label', 'Accessible container');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Container>This container is optimized for dark mode.</Container>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('This container is optimized for dark mode.')).toBeVisible();
  },
};
