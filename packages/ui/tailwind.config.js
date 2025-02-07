import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /* === FONT FAMILY === */
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['"Press Start 2P"', ...fontFamily.sans],
      },

      /* === COLORS (Modern + Vibrant) === */
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        placeholder: 'hsl(var(--placeholder))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(51, 100%, 65%)',
          dark: 'hsl(51, 100%, 50%)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          light: 'hsl(96, 63%, 65%)',
          dark: 'hsl(96, 63%, 45%)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          light: 'hsl(157, 58%, 65%)',
          dark: 'hsl(157, 58%, 45%)',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
          light: 'hsl(189, 64%, 55%)',
          dark: 'hsl(189, 64%, 40%)',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
          light: 'hsl(174, 53%, 55%)',
          dark: 'hsl(174, 53%, 40%)',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
          light: 'hsl(35, 100%, 65%)',
          dark: 'hsl(35, 100%, 45%)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          light: 'hsl(0, 100%, 40%)',
          dark: 'hsl(0, 100%, 30%)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        /* === GRADIENTS === */
        gradient: {
          primary: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
          accent: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--info)) 100%)',
        },

        /* === MODERN UI COLORS === */
        pink: '#FF6392',
        orange: '#FF9F1C',
        purple: '#8A2BE2',
        black: '#000000',
        white: '#FFFFFF',
      },

      /* === BORDER RADIUS === */
      borderRadius: {
        none: '0rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },

      /* === SHADOWS (For Modern Depth Effects) === */
      boxShadow: {
        sm: '0 2px 4px var(--shadow-color)',
        md: '0 4px 8px var(--shadow-color)',
        lg: '0 6px 12px var(--shadow-color)',
        xl: '0 8px 16px var(--shadow-color)',
        glass: '0 4px 10px var(--shadow-color) inset',
      },

      /* === TYPOGRAPHY === */
      fontSize: {
        'xs': ['0.75rem', '1rem'],
        'sm': ['0.875rem', '1.25rem'],
        'base': ['1rem', '1.5rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
      },

      /* === ANIMATIONS === */
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'scale-up': 'scaleUp 0.3s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleUp: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
      },

      /* === CONTAINER === */
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
  ],
};
