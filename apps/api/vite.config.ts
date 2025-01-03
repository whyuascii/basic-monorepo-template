import { defineConfig, mergeConfig } from "vite";
import { sharedConfig } from "../../packages/vite-config/vite.shared-config";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    root: __dirname,
    server: {
      port: 4000,
    },
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@api": "./src",
      },
    },
  })
);
