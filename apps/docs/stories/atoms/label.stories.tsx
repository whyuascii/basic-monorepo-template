import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Input } from '@workspace/ui/atoms/input';
import { Label } from '@workspace/ui/atoms/label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'Defines which input field the label is associated with.',
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
## 🏷️ Label (Atom)

The **\`Label\`** component provides a **semantic and accessible** text label for form elements, improving usability and clarity.

### 🔹 Structure:
1️⃣ **\`htmlFor\`** → Connects the label to a form input for accessibility. \n
2️⃣ **\`className\`** → Allows **custom styling** via Tailwind or CSS. \n
3️⃣ **\`peer\` class** → Adapts based on the input field state (e.g., disabled, focus). \n

### 🔹 Features:
✅ **Fully Accessible** → Ensures **proper screen reader support**.  \n
✅ **Customizable Styling** → Can be easily **styled via Tailwind**.  \n
✅ **Supports Disabled States** → Adapts to **inactive input fields**.  \n
✅ **Dark Mode Compatible** → Works well in both **light and dark themes**.  \n
✅ **Usability Enhancements** → Improves **form readability and interaction**.  \n
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
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: 'default-input',
    children: 'Default Label',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <Input id="default-input" placeholder="Enter text..." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Default Label')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    htmlFor: 'disabled-input',
    children: 'Disabled Label',
    className: 'peer-disabled:opacity-70 peer-disabled:cursor-not-allowed',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <Input id="disabled-input" placeholder="Disabled input" disabled />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Disabled Label')).toBeVisible();
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'required-input',
    children: (
      <>
        Required Label <span className="text-red-500">*</span>
      </>
    ),
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <Input id="required-input" placeholder="Required input" required />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Required Label')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  args: {
    htmlFor: 'custom-input',
    className: 'bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md',
    children: 'Custom Styled Label',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <Input id="custom-input" className="border border-gray-500 bg-gray-50" placeholder="Styled input" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Custom Styled Label')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  args: {
    'htmlFor': 'accessible-input',
    'children': 'Accessible Label',
    'aria-label': 'Accessible Label for Screen Readers',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <Input id="accessible-input" aria-label="Accessible input field" placeholder="Type something..." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Accessible Label')).toHaveAttribute('aria-label', 'Accessible Label for Screen Readers');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Label htmlFor="dark-mode-input" className="text-white">
        Dark Mode Label
      </Label>
      <Input
        id="dark-mode-input"
        className="border-gray-700 bg-gray-800 text-white p-2 rounded-md"
        placeholder="Dark mode input"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Dark Mode Label')).toBeVisible();
  },
};
