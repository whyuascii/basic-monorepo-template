import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@workspace/ui/atoms/label';

// Storybook metadata following Atomic Design
const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
### Label (Atom)

The \`Label\` component provides a **semantic and accessible** text label for form elements, improving usability and clarity.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component used for form elements.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// Default Label Example
export const Default: Story = {
  render: () => <Label htmlFor="example">Default Label</Label>,
};

// Disabled State Example
export const Disabled: Story = {
  render: () => (
    <div>
      <input type="text" id="disabled-input" disabled className="peer border p-2" />
      <Label htmlFor="disabled-input" className="peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">
        Disabled Label
      </Label>
    </div>
  ),
};

// Required Label Example
export const Required: Story = {
  render: () => (
    <div>
      <Label htmlFor="required-input">
        Required Label <span className="text-red-500">*</span>
      </Label>
      <input type="text" id="required-input" className="border p-2" required />
    </div>
  ),
};
