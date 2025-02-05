import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@workspace/ui/components/slider';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
### Slider Component (Atom)

The \`Slider\` component allows users to select a numeric value by dragging a handle along a track.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component that provides user interaction for value selection.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Default slider
export const Default: Story = {
  render: () => <Slider />,
};

// Slider with initial value
export const WithValue: Story = {
  render: () => <Slider defaultValue={[50]} />,
};

// Disabled slider
export const Disabled: Story = {
  render: () => <Slider disabled />,
};

// Slider with custom track color
export const CustomTrack: Story = {
  render: () => <Slider className="bg-accent" />,
};

// Slider with multiple thumbs (range selection)
export const Range: Story = {
  render: () => <Slider defaultValue={[20, 80]} />,
};
