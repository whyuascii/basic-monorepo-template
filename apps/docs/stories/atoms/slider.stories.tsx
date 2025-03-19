import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Slider } from '@workspace/ui/atoms/slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
## 🎚️ Slider Component (Atom)

The **\`Slider\`** component allows users to **select a numeric value** by dragging a handle along a track.

### 🔹 Structure:
1️⃣ **\`Track\`** → The **background bar** that represents the range.  \n
2️⃣ **\`Thumb\`** → The **draggable handle** that users interact with.  \n
3️⃣ **\`Range\`** → The **filled portion** of the track indicating progress.  \n
4️⃣ **\`Tooltip\` (Optional)** → Displays the **current value** above the thumb.  \n

### 🔹 Features:
✅ **Supports Single & Range Selection** → Users can pick **one or multiple values**  \n
✅ **Keyboard Accessible** → Users can navigate using **arrow keys**  \n
✅ **Dark Mode Compatible** → Adjusts to **light and dark themes**  \n
✅ **Customizable** → Can modify **colors, track styles, and behavior**  \n
✅ **ARIA Support** → Improves **accessibility for screen readers**  \n
✅ **Works with Forms** → Can be integrated with **React Hook Form or any UI state**  \n
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ✅ Default slider
export const Default: Story = {
  render: () => <Slider />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeVisible();
  },
};

// ✅ Single thumb slider
export const WithValue: Story = {
  render: () => <Slider defaultValue={[50]} showTooltip />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeVisible();
  },
};

// ✅ Disabled slider
export const Disabled: Story = {
  render: () => <Slider disabled />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeDisabled();
  },
};

// ✅ Custom Track Slider
export const CustomTrack: Story = {
  render: () => <Slider className="bg-gradient-to-r from-blue-500 to-purple-500" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeVisible();
  },
};

// ✅ Multi-thumb slider (Range selection)
export const Range: Story = {
  render: () => <Slider defaultValue={[20, 80]} showTooltip />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getAllByRole('slider')).toHaveLength(2);
  },
};

// ✅ Slider with tooltip showing value
export const WithTooltip: Story = {
  render: () => <Slider defaultValue={[40]} showTooltip />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeVisible();
  },
};

// ✅ Dark Mode
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Slider className="bg-gray-700" defaultValue={[60]} showTooltip />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('slider')).toBeVisible();
  },
};
