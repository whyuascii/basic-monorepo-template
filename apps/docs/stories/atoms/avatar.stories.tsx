import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/atoms/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    seed: {
      control: 'text',
      description: 'Custom seed for generating DiceBear avatars.',
    },
  },
  args: {
    seed: 'User123',
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🖼️ Avatar (Atom)

The **\`Avatar\`** component represents users visually through **profile images, initials, or fallback icons**.

### 🔹 Structure:
1️⃣ **\`AvatarImage\`** → Displays the users profile picture.\n
2️⃣ **\`AvatarFallback\`** → Shown when the image fails to load or is unavailable.\n
3️⃣ **\`seed\` (Optional)** → Generates **unique avatars** via [DiceBear](https://www.dicebear.com).\n

### 🔹 Features:
✅ **Customizable Sizes & Styles** → Supports Tailwind and class overrides. \n
✅ **Fallback Support** → Shows initials or a generated avatar if the image is missing.\n
✅ **Accessibility Compliant** → Includes "alt" attributes and ARIA support.\n
✅ **Optimized for Performance** → Uses "shrink-0" to maintain aspect ratios.\n
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
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: <AvatarImage src="https://placehold.co/150" alt="User Avatar" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarImg = canvas.getByRole('img');

    // Ensure avatar image is visible
    expect(avatarImg).toBeVisible();
  },
};

export const WithFallback: Story = {
  args: {
    children: <AvatarFallback>JD</AvatarFallback>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('JD')).toBeVisible();
  },
};

export const CustomSize: Story = {
  args: {
    className: 'h-20 w-20',
    children: <AvatarImage src="https://placehold.co/150" alt="Large Avatar" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const BrokenImage: Story = {
  args: {
    children: <AvatarImage src="https://invalid-url.com/image.jpg" alt="Broken Image" />,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('AB')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-md',
    children: <AvatarImage src="https://placehold.co/150" alt="Styled Avatar" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const DiceBearGenerated: Story = {
  args: {
    seed: 'RetroUser',
  },
  render: (args) => <Avatar {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    children: <AvatarImage src="https://placehold.co/150" alt="Accessible Avatar" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarImg = canvas.getByRole('img');

    // Validate accessibility attributes
    expect(avatarImg).toHaveAttribute('alt', 'Accessible Avatar');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Avatar className="border-gray-700">
        <AvatarImage src="https://placehold.co/150" alt="Dark Mode Avatar" />
      </Avatar>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img')).toBeVisible();
  },
};
