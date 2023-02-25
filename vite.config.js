import { defineConfig } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import eslintPlugin from "vite-plugin-eslint";
import { createCSSJSImportPlugin } from "vite-css-in-js";

export default defineConfig({
  plugins: [vue(), dts(), eslintPlugin(), createCSSJSImportPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SG208Button",
      fileName: "sg208-button",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
