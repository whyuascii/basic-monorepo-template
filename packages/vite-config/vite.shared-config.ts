import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export const sharedConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@workspace/ui": path.resolve(__dirname, "../../packages/ui"),
    },
  },
});
