import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export const sharedConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@workspace/ui': path.resolve(__dirname, '../../packages/ui'),
    },
  },
});
