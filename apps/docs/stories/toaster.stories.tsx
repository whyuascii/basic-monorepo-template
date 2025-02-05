import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';
import { Toaster } from '@workspace/ui/components/toaster';
import { useToast } from '@workspace/ui/hooks/use-toast';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Toaster> = {
  title: 'Organisms/Toaster',
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component: `
### Toaster Component (Organism)

The \`Toaster\` component provides a system for displaying temporary messages to users.

#### Atomic Design Classification:

- **Organism**: Manages multiple toast notifications, providing structure and user feedback.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

// Default toaster example
export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <TriggerToastExample />
    </div>
  ),
};

// Toast example with different types
export const DifferentToastTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <TriggerToastExample type="success" />
      <TriggerToastExample type="error" />
      <TriggerToastExample type="warning" />
      <TriggerToastExample type="info" />
    </div>
  ),
};

// Toast with an action button
export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <TriggerToastExample withAction />
    </div>
  ),
};

// Toast with a longer duration
export const LongDuration: Story = {
  render: () => (
    <div>
      <Toaster />
      <TriggerToastExample duration={8000} />
    </div>
  ),
};

// Accessibility test for toasts
export const AccessibilityTest: Story = {
  render: () => (
    <div>
      <Toaster />
      <TriggerToastExample ariaLabel="Accessible Toast Example" />
    </div>
  ),
};

// Component for triggering toasts
function TriggerToastExample({
  type = 'info',
  withAction = false,
  duration = 5000,
  ariaLabel,
}: {
  type?: string;
  withAction?: boolean;
  duration?: number;
  ariaLabel?: string;
}) {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          'title': `This is a ${type} toast`,
          'description': `A sample ${type} notification message.`,
          duration,
          'action': withAction ? <Button variant="outline">Undo</Button> : undefined,
          'aria-label': ariaLabel,
        })
      }
    >
      Show {type} toast
    </Button>
  );
}
