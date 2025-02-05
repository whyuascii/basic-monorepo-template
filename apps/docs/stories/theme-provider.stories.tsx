import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workspace/ui/components/button';
import { ThemeProvider, useTheme } from '@workspace/ui/components/theme-provider';

// Storybook metadata with Atomic Design structure
const meta: Meta<typeof ThemeProvider> = {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    docs: {
      description: {
        component: `
### ThemeProvider Component (Provider)

The \`ThemeProvider\` component manages and persists theme selection (light, dark, or system).

#### Atomic Design Classification:

- **Provider**: Controls the theme state for the entire application.
 `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

// Default ThemeProvider example
export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  ),
};

// Theme switcher with buttons
export const ThemeSwitcherExample: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeSwitcher />
    </ThemeProvider>
  ),
};

// Theme persistence test
export const PersistentTheme: Story = {
  render: () => (
    <ThemeProvider storageKey="storybook-theme">
      <ThemeSwitcher />
    </ThemeProvider>
  ),
};

// Accessibility test
export const AccessibilityTest: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeSwitcher ariaLabel="Theme Toggle Example" />
    </ThemeProvider>
  ),
};

// Component for switching themes
function ThemeSwitcher({ ariaLabel }: { ariaLabel?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-x-4 p-4">
      <p className="text-foreground">
        Current Theme: <strong>{theme}</strong>
      </p>
      <Button onClick={() => setTheme('light')} aria-label={ariaLabel}>
        Light
      </Button>
      <Button onClick={() => setTheme('dark')} aria-label={ariaLabel}>
        Dark
      </Button>
      <Button onClick={() => setTheme('system')} aria-label={ariaLabel}>
        System
      </Button>
    </div>
  );
}
