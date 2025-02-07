import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@workspace/ui/molecules/input-otp';

// Storybook metadata following Atomic Design
const meta: Meta<typeof InputOTP> = {
  title: 'Molecules/InputOTP',
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component: `
### Input OTP (Molecule)

The \`InputOTP\` component is a **multi-digit input field** designed for entering OTP (One-Time Passwords). It provides **seamless UX**, keyboard navigation, and accessibility.

#### Atomic Design Classification:

- **Molecule**: A **composable unit** consisting of multiple input slots.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

// Default OTP Input Example
export const Default: Story = {
  render: () => (
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSeparator />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
  ),
};

// OTP with Separator
export const WithSeparator: Story = {
  render: () => (
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSeparator />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSeparator />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  ),
};

// Disabled OTP Input
export const Disabled: Story = {
  render: () => (
    <InputOTPGroup>
      <InputOTPSlot index={0} className="opacity-50 cursor-not-allowed" />
      <InputOTPSlot index={1} className="opacity-50 cursor-not-allowed" />
      <InputOTPSeparator />
      <InputOTPSlot index={2} className="opacity-50 cursor-not-allowed" />
      <InputOTPSlot index={3} className="opacity-50 cursor-not-allowed" />
    </InputOTPGroup>
  ),
};
