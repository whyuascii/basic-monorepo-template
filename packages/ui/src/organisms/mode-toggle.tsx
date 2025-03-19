import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../components/theme-provider';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../molecules/dropdown-menu';
import { Button } from '../atoms/button';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <Sun className="h-5 w-5 text-yellow-400 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 text-blue-400 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border border-border bg-popover/80 backdrop-blur-md p-2 shadow-lg">
        <DropdownMenuItem
          className="cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          onClick={() => setTheme('light')}
        >
          ☀️ Light Mode
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          onClick={() => setTheme('dark')}
        >
          🌙 Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          onClick={() => setTheme('system')}
        >
          💻 System Default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
