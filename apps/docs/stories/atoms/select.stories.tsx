import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/atoms/select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
## 🔽 Select Component (Atom)

The **\`Select\`** component provides a **user-friendly dropdown menu** for selecting options.

### 🔹 Structure:
1️⃣ **\`SelectTrigger\`** → Button that opens the dropdown.  \n
2️⃣ **\`SelectContent\`** → Container for the list of **selectable options**.  \n
3️⃣ **\`SelectItem\`** → Individual **selectable items**.  \n
4️⃣ **\`SelectGroup\`** → Groups related options **under a label**.  \n
5️⃣ **\`SelectScrollUpButton\` / \`SelectScrollDownButton\`** → Enables **scrolling through large lists**.  \n

### 🔹 Features:
✅ **Customizable Styling** → Fully **themed select component**.  \n
✅ **Scrollable Lists** → Supports **long lists** with scrolling.  \n
✅ **Grouped Options** → Allows **categorization** inside select menus.  \n
✅ **Dark Mode Compatible** → Adapts to **light & dark themes**.  \n
✅ **Keyboard & Mouse Support** → Fully **navigable** with a keyboard.  \n
✅ **Fully Accessible** → Includes **ARIA support for screen readers**.  \n
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
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeVisible();
  },
};

export const Themed: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="bg-blue-500 text-white border-blue-600">
        <SelectValue placeholder="Choose..." />
      </SelectTrigger>
      <SelectContent className="bg-blue-100 text-blue-900">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeVisible();
  },
};

export const Scrollable: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a long list item" />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          {[...Array(20).keys()].map((i) => (
            <SelectItem key={i} value={`option-${i + 1}`}>
              Option {i + 1}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeVisible();
  },
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled Select" />
      </SelectTrigger>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeDisabled();
  },
};

export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="home">🏠 Home</SelectItem>
          <SelectItem value="profile">👤 Profile</SelectItem>
          <SelectItem value="settings">⚙️ Settings</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <Select>
      <SelectTrigger aria-label="Accessible Select">
        <SelectValue placeholder="Accessible Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toHaveAttribute('aria-label', 'Accessible Select');
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Select>
        <SelectTrigger className="bg-gray-800 text-white border-gray-700">
          <SelectValue placeholder="Dark Mode Select" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-gray-300">
          <SelectItem value="light">Light Mode</SelectItem>
          <SelectItem value="dark">Dark Mode</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('combobox')).toBeVisible();
  },
};
