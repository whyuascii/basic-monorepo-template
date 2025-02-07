import type { Meta, StoryObj } from '@storybook/react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@workspace/ui/organisms/form';
import { useForm } from 'react-hook-form';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Form> = {
  title: 'Organisms/Form',
  component: Form,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Form Component (Organism)

The \`Form\` component integrates with **React Hook Form** to manage form validation, labels, descriptions, and error messages.

#### Atomic Design Classification:

- **Organism**: A structured form that combines multiple smaller components (molecules) like inputs, labels, and validation messages.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

// Default form example
export const Default: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: '',
      },
    });

    return (
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded-md" placeholder="Enter your username" />
                </FormControl>
                <FormDescription>This is your unique username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded-md">
            Submit
          </button>
        </form>
      </Form>
    );
  },
};

// Form with multiple fields and validation
export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
        password: '',
      },
    });

    return (
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format' },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded-md" placeholder="Enter your email" />
                </FormControl>
                <FormDescription>We’ll never share your email with anyone else.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            rules={{ required: 'Password is required', minLength: { value: 6, message: 'Min length is 6' } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input {...field} type="password" className="w-full p-2 border rounded-md" placeholder="********" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded-md">
            Sign In
          </button>
        </form>
      </Form>
    );
  },
};

// Form with disabled fields
export const DisabledFields: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        fullName: 'John Doe',
      },
    });

    return (
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded-md bg-gray-200" disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="px-3 py-2 bg-gray-500 text-white rounded-md" disabled>
            Submit
          </button>
        </form>
      </Form>
    );
  },
};

// Form with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg rounded-lg',
  },
  render: (args) => {
    const form = useForm({
      defaultValues: {
        username: '',
      },
    });

    return (
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Username</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded-md border-purple-600" placeholder="Custom" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="px-3 py-2 bg-purple-600 text-white rounded-md">
            Submit
          </button>
        </form>
      </Form>
    );
  },
};

// Accessibility test for forms
export const AccessibilityTest: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: '',
      },
    });

    return (
      <Form {...form}>
        <form className="space-y-4" aria-label="User Form">
          <FormField
            control={form.control}
            name="username"
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-label="Username Field">Username</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded-md" placeholder="Enter your username" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded-md" aria-label="Submit Form">
            Submit
          </button>
        </form>
      </Form>
    );
  },
};
