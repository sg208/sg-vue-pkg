/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { createCSSJSImportPlugin } from "vite-css-in-js";
import { isCssInJsSource } from "./vite.shared.mts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      processor: "vue",
      tsconfigPath: "./tsconfig.json",
      include: ["src/**/*.ts", "src/**/*.vue"],
      exclude: ["src/**/*.test.ts"],
    }),
    createCSSJSImportPlugin({ fileFilter: isCssInJsSource }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
      name: "SG208Button",
      fileName: "sg208-button",
      cssFileName: "style",
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
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.ts"],
    // WHY: a cached .vue transform skips vite-css-in-js, so its virtual
    // `vite-css-in-js@*.css` modules are never registered and every rerun fails.
    fsModuleCache: false,
  },
});
