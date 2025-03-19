import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Switch } from '@workspace/ui/atoms/switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
## 🔘 Switch Component (Atom)

The **\`Switch\`** component is used for **toggling between two states** (on/off).

### 🔹 Structure:
1️⃣ **\`Root\`** → The outer container that defines the switch.  \n
2️⃣ **\`Thumb\`** → The circular handle that moves between **on/off** states.  \n
3️⃣ **\`Label\` (Optional)** → Describes the **switch purpose** for better UX.  \n

### 🔹 Features:
✅ **Supports Two States** → Checked (On) & Unchecked (Off)  \n
✅ **Keyboard & Mouse Support** → Fully **interactive** via clicks and keyboard  \n
✅ **Customizable** → Easily styled with **Tailwind or class overrides**  \n
✅ **Dark Mode Compatible** → Adapts to **light & dark themes**  \n
✅ **Accessible** → Uses **aria-labels & focus indicators**  \n
✅ **Disabled State** → Can be **disabled to prevent interaction**  \n
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Default Switch
export const Default: Story = {
  render: () => <Switch aria-label="Default switch" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toBeVisible();
  },
};

// Checked Switch
export const Checked: Story = {
  render: () => <Switch defaultChecked aria-label="Checked switch" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  },
};

// Disabled Switch
export const Disabled: Story = {
  render: () => <Switch disabled aria-label="Disabled switch" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toBeDisabled();
  },
};

// Switch with Custom Styling
export const CustomStyled: Story = {
  render: () => <Switch className="bg-red-500 data-[state=checked]:bg-green-500" aria-label="Custom styled switch" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toBeVisible();
  },
};

// Accessibility Test
export const AccessibilityTest: Story = {
  render: () => (
    <label htmlFor="dark-mode-toggle" className="flex items-center gap-2">
      <span>Dark Mode</span>
      <Switch id="dark-mode-toggle" aria-label="Dark Mode toggle" />
    </label>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toHaveAccessibleName('Dark Mode toggle');
  },
};

// Dark Mode Support
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Switch className="border-white text-white" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('switch')).toBeVisible();
  },
};
