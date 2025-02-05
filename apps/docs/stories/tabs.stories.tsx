import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `
### Tabs Component (Molecule)

The \`Tabs\` component allows users to switch between different sections of content.

#### Atomic Design Classification:

- **Molecule**: Combines tab navigation (atoms) with content switching.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Default tabs example
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

// Tabs with disabled option
export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

// Tabs with longer content
export const LongContent: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>
          This is an example of a longer text content inside a tab. It allows users to explore different sections with
          ease.
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>The second tab contains more details about the subject, providing users with additional information.</p>
      </TabsContent>
    </Tabs>
  ),
};

// Accessibility test for tabs
export const AccessibilityTest: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Accessible Tab Example">
        <TabsTrigger value="tab1">Tab A</TabsTrigger>
        <TabsTrigger value="tab2">Tab B</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Accessible content for Tab A</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Accessible content for Tab B</p>
      </TabsContent>
    </Tabs>
  ),
};
