import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createCSSJSImportPlugin } from "vite-css-in-js";
import { isCssInJsSource } from "./vite.shared.mts";

// Showcase and docs page. Builds a static site from demo/ into dist-demo/,
// importing the components from src/ so the page always shows current code.
export default defineConfig({
  root: fileURLToPath(new URL("demo", import.meta.url)),
  base: "./",
  plugins: [vue(), createCSSJSImportPlugin({ fileFilter: isCssInJsSource })],
  build: {
    outDir: fileURLToPath(new URL("dist-demo", import.meta.url)),
    emptyOutDir: true,
  },
});
