import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@workspace/ui': path.resolve(__dirname, 'src'),
    },
  },
});
