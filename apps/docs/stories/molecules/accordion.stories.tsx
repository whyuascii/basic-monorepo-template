import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@workspace/ui/molecules/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
      description: 'Allow single or multiple open sections.',
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow sections to be fully collapsed.',
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
  parameters: {
    docs: {
      description: {
        component: `
## 📂 Accordion (Molecule)

The **\`Accordion\`** component is a collapsible UI element used to organize content efficiently.

### 🔹 Structure:
1️⃣ **\`AccordionItem\`** → Represents a section of the accordion.  \n
2️⃣ **\`AccordionTrigger\`** → The clickable header to expand/collapse a section.  \n
3️⃣ **\`AccordionContent\`** → The collapsible content area.  \n

### 🔹 Features:
✅ **Supports multiple open sections** (controlled via \`type\`).  \n
✅ **Can be fully collapsible** when \`collapsible: true\`.  \n
✅ **Keyboard accessible** – Navigate via **Arrow keys, Enter, and Space**.  \n
✅ **Screen reader-friendly** – Uses proper **ARIA attributes**.  \n
✅ **Customizable** – Tailwind support for **easy styling**.  \n
`,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbZngeaWlthA7T7Xbn37Ib/Myna-UI---TailwindCSS-%26-shadcn%2Fui-%26-Radix-Premium-UI-Kit-(Community)?node-id=2672-1548&t=hqtB3yCRobk4iAjA-4',
    },
    controls: {
      exclude: ['children'], // Hides unnecessary child props in Storybook controls.
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Section 1');

    await userEvent.click(trigger);
    expect(canvas.getByText('Content for section 1.')).toBeVisible();
  },
};

export const Multiple: Story = {
  args: { type: 'multiple' },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Section 1'));
    await userEvent.click(canvas.getByText('Section 2'));

    expect(canvas.getByText('Content for section 1.')).toBeVisible();
    expect(canvas.getByText('Content for section 2.')).toBeVisible();
  },
};

export const Collapsible: Story = {
  args: { collapsible: true },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Toggle Section</AccordionTrigger>
        <AccordionContent>This section can be fully collapsed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Toggle Section');

    await userEvent.click(trigger);
    await userEvent.click(trigger);

    expect(canvas.getByText('Toggle Section')).toBeVisible();
  },
};

export const CustomStyled: Story = {
  render: () => (
    <Accordion type="single" className="border border-gray-300 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold text-blue-600">Styled Section</AccordionTrigger>
        <AccordionContent className="text-gray-700">This section has custom styles.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccessibilityTest: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accessible Section</AccordionTrigger>
        <AccordionContent>Check keyboard navigation and screen reader support.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Accessible Section');

    await userEvent.type(trigger, '{Enter}');
    expect(canvas.getByText('Check keyboard navigation and screen reader support.')).toBeVisible();
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">Dark Mode Section</AccordionTrigger>
          <AccordionContent className="text-gray-300">This section is styled for dark mode.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
