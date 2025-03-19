import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Textarea } from '@workspace/ui/atoms/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `
## 📝 Textarea Component (Atom)

The **\`Textarea\`** component provides a **multi-line input field** for users.

### 🔹 Structure:
1️⃣ **\`Root\`** → The main container for the textarea.  \n
2️⃣ **\`Placeholder\`** → Guides users on **expected input**.  \n
3️⃣ **\`Resize Handle\` (Optional)** → Enables **resizing if needed**.  \n

### 🔹 Features:
✅ **Multi-line Support** → Ideal for **long-form input**  \n
✅ **Resizable** → Can be **fixed or adjustable** in size  \n
✅ **Dark Mode Compatible** → Works **seamlessly** in light & dark themes  \n
✅ **Keyboard & Screen Reader Accessible** → Fully **ARIA-compliant**  \n
✅ **Supports Custom Styling** → Easily styled with **Tailwind or class overrides**  \n
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
type Story = StoryObj<typeof Textarea>;

// Default Textarea
export const Default: Story = {
  render: () => <Textarea placeholder="Enter your text here..." />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toBeVisible();
  },
};

// Disabled Textarea
export const Disabled: Story = {
  render: () => <Textarea placeholder="Disabled input" disabled />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toBeDisabled();
  },
};

// Textarea with Pre-filled Value
export const WithValue: Story = {
  render: () => <Textarea defaultValue="This is a pre-filled textarea." />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toHaveValue('This is a pre-filled textarea.');
  },
};

// Resizable Textarea
export const Resizable: Story = {
  render: () => <Textarea placeholder="Resizable text area" className="resize" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toBeVisible();
  },
};

// Dark Mode Support
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Textarea placeholder="Dark mode textarea" className="border-white text-white bg-gray-800" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toBeVisible();
  },
};

// Accessibility Test
export const AccessibilityTest: Story = {
  render: () => <Textarea aria-label="Accessible Textarea Example" placeholder="Type something..." />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox')).toHaveAccessibleName('Accessible Textarea Example');
  },
};
