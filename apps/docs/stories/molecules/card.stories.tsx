import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@workspace/ui/molecules/card';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
    children: {
      control: 'text',
      description: 'Card content.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Card Component (Molecule)

The \`Card\` component is used to group related content in a visually distinct container.

#### Atomic Design Classification:

- **Molecule**: Combines atomic elements such as headings, text, and buttons to create reusable content blocks.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default card example
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <button type="button" className="ml-auto text-primary">
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

// Card with only content
export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This card contains content only, without a header or footer.</p>
      </CardContent>
    </Card>
  ),
};

// Card with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-300 shadow-lg',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription>With custom styling applied.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Customize card appearance by passing different class names.</p>
      </CardContent>
      <CardFooter>
        <button type="button" className="ml-auto bg-primary text-white px-4 py-2 rounded-md">
          Custom Action
        </button>
      </CardFooter>
    </Card>
  ),
};

// Card with long text content
export const LongText: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Long Content Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada. Nunc non ornare justo. Praesent ut turpis nec mi tempor interdum a at metus.
        </p>
      </CardContent>
      <CardFooter>
        <button type="button" className="ml-auto text-primary">
          Read More
        </button>
      </CardFooter>
    </Card>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <Card aria-label="Accessible Card">
      <CardHeader>
        <CardTitle>Accessible Card</CardTitle>
        <CardDescription>Ensuring accessibility for screen readers.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content that supports keyboard navigation and screen readers.</p>
      </CardContent>
      <CardFooter>
        <button type="button" className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md">
          Confirm
        </button>
      </CardFooter>
    </Card>
  ),
};
