import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@workspace/ui/components/alert';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
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
### Alert Component (Atom)

The \`Alert\` component is a fundamental UI element used to display important messages to the user.

#### Atomic Design Classification:

- **Atom**: A simple and self-contained UI component that can be used independently or within molecules and organisms.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Default alert example
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
};

// Destructive alert variant
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
};

// Custom styled alert
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

// Alert with icons
export const WithIcon: Story = {
  render: () => (
    <Alert variant="default" className="relative">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: storybook example */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute left-4 top-4 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
      <div>
        <AlertTitle>With Icon</AlertTitle>
        <AlertDescription>Alert with an icon included.</AlertDescription>
      </div>
    </Alert>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <Alert variant="default" role="alert" aria-live="assertive">
      <AlertTitle>Accessibility Test</AlertTitle>
      <AlertDescription>Ensure alerts are accessible for screen readers.</AlertDescription>
    </Alert>
  ),
};
