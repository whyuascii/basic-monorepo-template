import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Input } from '@workspace/ui/atoms/input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'text',
      description: 'Specifies the input type (e.g., text, password, number, file).',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text displayed inside the input field.',
      defaultValue: 'Enter text...',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input, preventing user interaction.',
      defaultValue: false,
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for additional styling.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🔤 Input (Atom)

The **\`Input\`** component is a **form field** with built-in styling, accessibility, and usability enhancements.

### 🔹 Structure:
1️⃣ **\`type\`** → Defines the **input type** (text, password, number, etc.). \n
2️⃣ **\`placeholder\`** → Displays **helper text** when empty. \n
3️⃣ **\`className\`** → Allows **custom styling** via Tailwind or CSS. \n
4️⃣ **\`disabled\`** → Prevents **user interaction** if true. \n

### 🔹 Features:
✅ **Supports Various Input Types** → Text, Password, Number, File Upload, etc.  \n
✅ **Customizable Styling** → Can be easily **styled via Tailwind**.  \n
✅ **Fully Accessible** → Includes **focus styles & keyboard support**.  \n
✅ **Dark Mode Compatible** → Adapts to both **light and dark themes**.  \n
✅ **Smooth Transitions & Shadows** → Enhances **user experience with animations**.  \n
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Enter text...')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Disabled input')).toBeDisabled();
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Enter password')).toBeVisible();
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Enter a number')).toBeVisible();
  },
};

export const FileUpload: Story = {
  args: {
    type: 'file',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
    placeholder: 'Custom Styled Input',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Custom Styled Input')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    'type': 'text',
    'placeholder': 'Accessible Input',
    'aria-label': 'Accessible Input Field',
  },
  render: (args) => <Input {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Accessible Input')).toHaveAttribute('aria-label', 'Accessible Input Field');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Input type="text" placeholder="Dark Mode Input" className="border-gray-700 bg-gray-800 text-white" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText('Dark Mode Input')).toBeVisible();
  },
};
