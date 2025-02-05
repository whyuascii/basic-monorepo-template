import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@workspace/ui/components/switch';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
### Switch Component (Atom)

The \`Switch\` component is used for toggling between two states (on/off).

#### Atomic Design Classification:

- **Atom**: A fundamental UI component that provides interactivity. `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Default switch example
export const Default: Story = {
  render: () => <Switch aria-label="Default switch" />,
};

// Switch with checked state
export const Checked: Story = {
  render: () => <Switch defaultChecked aria-label="Checked switch" />,
};

// Disabled switch
export const Disabled: Story = {
  render: () => <Switch disabled aria-label="Disabled switch" />,
};

// Switch with custom class
export const CustomStyled: Story = {
  render: () => <Switch className="bg-red-500 data-[state=checked]:bg-green-500" aria-label="Custom styled switch" />,
};

// Accessibility test for switches
export const AccessibilityTest: Story = {
  render: () => (
    <label htmlFor="dark-mode-toggle" className="flex items-center gap-2">
      <span>Dark Mode</span>
      <Switch id="dark-mode-toggle" aria-label="Dark Mode toggle" />
    </label>
  ),
};
