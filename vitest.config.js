import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.jsx?$/],
    },
    setupFiles: "./setupVitest.js",
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
