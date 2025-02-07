import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Alert, AlertDescription, AlertTitle } from '@workspace/ui/atoms/alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      control: { type: 'select' },
      description: 'Defines the visual style of the alert.',
    },
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    children: {
      control: 'text',
      description: 'Alert content.',
    },
  },
  args: {
    variant: 'default',
    children: 'This is an alert message.',
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🚨 Alert (Atom)

The **\`Alert\`** component is a simple **informational message UI** element used to display important messages to the user.

### 🔹 Structure:
1️⃣ **\`AlertTitle\`** → Displays the heading of the alert.  \n
2️⃣ **\`AlertDescription\`** → Contains the alert message.  \n

### 🔹 Features:
✅ **Supports multiple variants** – Default, Destructive, Success, Warning, Info.  \n
✅ **Fully accessible** – Uses ARIA roles for proper **screen reader support**.  \n
✅ **Highly customizable** – Easily **styled with Tailwind** or custom CSS.  \n
✅ **Supports icons and interactive elements**.  \n
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
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Default Alert')).toBeVisible();
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertTitle className="text-red-600">Error!</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Error!')).toBeVisible();
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <AlertTitle className="text-green-600">Success!</AlertTitle>
        <AlertDescription>Your action was completed successfully.</AlertDescription>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Success!')).toBeVisible();
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <AlertTitle className="text-yellow-600">Warning!</AlertTitle>
        <AlertDescription>Proceed with caution.</AlertDescription>
      </>
    ),
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <AlertTitle className="text-blue-600">Info</AlertTitle>
        <AlertDescription>Here is some additional information.</AlertDescription>
      </>
    ),
  },
};

export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 bg-gray-100 text-gray-700',
    children: (
      <>
        <AlertTitle>Custom Alert</AlertTitle>
        <AlertDescription>This alert has custom styles applied.</AlertDescription>
      </>
    ),
  },
};

export const WithIcon: Story = {
  render: () => (
    <Alert variant="default" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute left-4 top-4 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Check Icon</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
      <div>
        <AlertTitle>With Icon</AlertTitle>
        <AlertDescription>Alert with an icon included.</AlertDescription>
      </div>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('With Icon')).toBeVisible();
  },
};

export const AccessibilityTest: Story = {
  render: () => (
    <Alert variant="default" role="alert" aria-live="assertive">
      <AlertTitle>Accessibility Test</AlertTitle>
      <AlertDescription>Ensure alerts are accessible for screen readers.</AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Accessibility Test')).toBeVisible();
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-4 rounded-lg">
      <Alert variant="default" className="text-white bg-gray-800 border-gray-700">
        <AlertTitle>Dark Mode</AlertTitle>
        <AlertDescription>This alert adapts to dark mode.</AlertDescription>
      </Alert>
    </div>
  ),
};
