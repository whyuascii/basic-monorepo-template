import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, ChartLegend, ChartTooltip } from '@workspace/ui/organisms/chart';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// Sample chart data
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 600 },
];

const config = {
  value: { label: 'Sales', color: '#3182ce' },
  name: { label: 'Month' },
};

const meta: Meta<typeof ChartContainer> = {
  title: 'Organisms/ChartContainer',
  component: ChartContainer,
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
### ChartContainer Component (Organism)

The \`ChartContainer\` component is a wrapper for Recharts-based charts with additional style and customization options.

#### Atomic Design Classification:

- **Organism**: Combines atomic elements such as axes, tooltips, and legends to form a complete data visualization.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

// Default line chart example
export const Default: Story = {
  render: (args) => (
    <ChartContainer {...args} config={config} className="max-w-lg mx-auto">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltip />} />
        <Legend content={<ChartLegend />} />
        <Line type="monotone" dataKey="value" stroke="#3182ce" />
      </LineChart>
    </ChartContainer>
  ),
};

// Chart with dark theme support
export const DarkTheme: Story = {
  render: (args) => (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <ChartContainer {...args} config={config} className="max-w-lg mx-auto">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Legend content={<ChartLegend />} />
          <Line type="monotone" dataKey="value" stroke="var(--color-value)" />
        </LineChart>
      </ChartContainer>
    </div>
  ),
};

// Chart with multiple lines
export const MultiLine: Story = {
  render: (args) => (
    <ChartContainer {...args} config={config} className="max-w-lg mx-auto">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltip />} />
        <Legend content={<ChartLegend />} />
        <Line type="monotone" dataKey="value" stroke="var(--color-value)" />
        <Line type="monotone" dataKey="value" stroke="red" />
      </LineChart>
    </ChartContainer>
  ),
};

// Chart with custom styling
export const CustomStyled: Story = {
  args: {
    className: 'border border-gray-400 shadow-lg p-4 rounded-lg',
  },
  render: (args) => (
    <ChartContainer {...args} config={config} className="max-w-lg mx-auto">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltip />} />
        <Legend content={<ChartLegend />} />
        <Line type="monotone" dataKey="value" stroke="#4CAF50" />
      </LineChart>
    </ChartContainer>
  ),
};

// Accessibility test case
export const AccessibilityTest: Story = {
  render: () => (
    <ChartContainer config={config} aria-label="Sales Chart" className="max-w-lg mx-auto">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltip />} />
        <Legend content={<ChartLegend />} />
        <Line type="monotone" dataKey="value" stroke="#ff6600" />
      </LineChart>
    </ChartContainer>
  ),
};
