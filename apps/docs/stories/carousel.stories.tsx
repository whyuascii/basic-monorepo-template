import type { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@workspace/ui/components/carousel';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Carousel> = {
  title: 'Organisms/Carousel',
  component: Carousel,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
      description: 'Sets the orientation of the carousel (horizontal or vertical).',
      defaultValue: 'horizontal',
    },
    className: {
      control: 'text',
      description: 'Custom classes for additional styling.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Carousel Component (Organism)

The \`Carousel\` component provides a scrollable container with optional navigation buttons, supporting both horizontal and vertical orientations.

#### Atomic Design Classification:

- **Organism**: Combines multiple atomic elements such as buttons and containers to create an interactive experience.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Default carousel example
export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem className="p-4 bg-gray-200 text-center rounded-lg">Slide 1</CarouselItem>
        <CarouselItem className="p-4 bg-gray-300 text-center rounded-lg">Slide 2</CarouselItem>
        <CarouselItem className="p-4 bg-gray-400 text-center rounded-lg">Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

// Vertical carousel example
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Carousel {...args} className="h-64 w-60 mx-auto">
      <CarouselContent>
        <CarouselItem className="p-4 bg-gray-200 text-center rounded-lg">Vertical 1</CarouselItem>
        <CarouselItem className="p-4 bg-gray-300 text-center rounded-lg">Vertical 2</CarouselItem>
        <CarouselItem className="p-4 bg-gray-400 text-center rounded-lg">Vertical 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

// Carousel without navigation buttons
export const WithoutNavigation: Story = {
  render: () => (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem className="p-4 bg-gray-200 text-center rounded-lg">Slide A</CarouselItem>
        <CarouselItem className="p-4 bg-gray-300 text-center rounded-lg">Slide B</CarouselItem>
        <CarouselItem className="p-4 bg-gray-400 text-center rounded-lg">Slide C</CarouselItem>
      </CarouselContent>
    </Carousel>
  ),
};

// Custom styled carousel
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-500 shadow-lg rounded-lg',
  },
  render: (args) => (
    <Carousel {...args} className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem className="p-4 bg-indigo-500 text-white text-center rounded-lg">Custom 1</CarouselItem>
        <CarouselItem className="p-4 bg-indigo-600 text-white text-center rounded-lg">Custom 2</CarouselItem>
        <CarouselItem className="p-4 bg-indigo-700 text-white text-center rounded-lg">Custom 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <Carousel aria-label="Carousel with accessible slides" className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem className="p-4 bg-gray-200 text-center rounded-lg">Accessible Slide 1</CarouselItem>
        <CarouselItem className="p-4 bg-gray-300 text-center rounded-lg">Accessible Slide 2</CarouselItem>
        <CarouselItem className="p-4 bg-gray-400 text-center rounded-lg">Accessible Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious aria-label="Previous slide" />
      <CarouselNext aria-label="Next slide" />
    </Carousel>
  ),
};
