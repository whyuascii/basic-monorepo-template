import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../../apps/web/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#22C55E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
