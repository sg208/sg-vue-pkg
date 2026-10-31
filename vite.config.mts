/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { createCSSJSImportPlugin } from "vite-css-in-js";

// WHY: in dev and Vitest, @vitejs/plugin-vue inlines <script setup> into the
// bare `.vue` module id, which the plugin's default filter (js/ts only) skips.
// Only modules that import `css` from vite-css-in-js go through its Babel pass,
// which has no TypeScript parser.
const CSS_IN_JS_IMPORT =
  /import\s*\{[^}]*\bcss\b[^}]*\}\s*from\s*["']vite-css-in-js["']/;

const isCssInJsSource = (fileId: string, code: string) => {
  const [path, query = ""] = fileId.split("?");
  const isScriptModule =
    /\.(vue|ts|js)$/.test(path) && !query.includes("type=style");

  return (
    isScriptModule &&
    !path.includes("node_modules") &&
    CSS_IN_JS_IMPORT.test(code)
  );
};

export default defineConfig({
  plugins: [
    vue(),
    dts({
      processor: "vue",
      tsconfigPath: "./tsconfig.json",
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
