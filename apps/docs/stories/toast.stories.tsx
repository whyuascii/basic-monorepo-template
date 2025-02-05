import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';
import { Toast, ToastAction, ToastClose, ToastProvider, ToastViewport } from '@workspace/ui/components/toast';
import { useToast } from '@workspace/ui/hooks/use-toast';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
### Toast Component (Molecule)

The \`Toast\` component provides temporary feedback to users, such as success messages or warnings.

#### Atomic Design Classification:

- **Molecule**: A self-contained, reusable component that conveys notifications.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Default toast example
export const Default: Story = {
  render: () => (
    <div>
      <ToastProvider>
        <ToastTriggerExample />
        <ToastViewport />
      </ToastProvider>
    </div>
  ),
};

// Toast example with different variants
export const VariantTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <ToastTriggerExample variant="default" />
      <ToastTriggerExample variant="destructive" />
    </div>
  ),
};

// Toast with an action button
export const WithAction: Story = {
  render: () => (
    <div>
      <ToastProvider>
        <ToastTriggerExample withAction />
        <ToastViewport />
      </ToastProvider>
    </div>
  ),
};

// Toast with a close button
export const WithCloseButton: Story = {
  render: () => (
    <div>
      <ToastProvider>
        <ToastTriggerExample withClose />
        <ToastViewport />
      </ToastProvider>
    </div>
  ),
};

// Toast with longer duration
export const LongDuration: Story = {
  render: () => (
    <div>
      <ToastProvider>
        <ToastTriggerExample duration={8000} />
        <ToastViewport />
      </ToastProvider>
    </div>
  ),
};

// Accessibility test for toasts
export const AccessibilityTest: Story = {
  render: () => (
    <div>
      <ToastProvider>
        <ToastTriggerExample ariaLabel="Accessible Toast Example" />
        <ToastViewport />
      </ToastProvider>
    </div>
  ),
};

// Component for triggering toasts
function ToastTriggerExample({
  variant = 'default',
  withAction = false,
  withClose = false,
  duration = 5000,
  ariaLabel,
}: {
  variant?: 'default' | 'destructive';
  withAction?: boolean;
  withClose?: boolean;
  duration?: number;
  ariaLabel?: string;
}) {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          'title': `This is a ${variant} toast`,
          'description': `A sample ${variant} notification message.`,
          duration,
          variant,
          'action': withAction ? <ToastAction altText={''}>Undo</ToastAction> : undefined,
          'aria-label': ariaLabel,
          'close': withClose ? <ToastClose /> : undefined,
        })
      }
    >
      Show {variant} toast
    </Button>
  );
}
