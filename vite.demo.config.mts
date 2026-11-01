import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createCSSJSImportPlugin } from "vite-css-in-js";
import { isCssInJsSource } from "./vite.shared.mts";

// Showcase and docs page. Builds a static site from demo/ into dist-demo/,
// importing the components from src/ so the page always shows current code.
// The legal pages are extra HTML entries next to index.html.
const demoPage = (file: string) =>
  fileURLToPath(new URL(`demo/${file}`, import.meta.url));

export default defineConfig({
  root: fileURLToPath(new URL("demo", import.meta.url)),
  base: "./",
  plugins: [vue(), createCSSJSImportPlugin({ fileFilter: isCssInJsSource })],
  build: {
    outDir: fileURLToPath(new URL("dist-demo", import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: demoPage("index.html"),
        accessibility: demoPage("accessibility.html"),
        privacy: demoPage("privacy.html"),
        terms: demoPage("terms.html"),
      },
    },
  },
});
