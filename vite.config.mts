/// <reference types="vitest/config" />
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { createCSSJSImportPlugin } from "vite-css-in-js";

// WHY: in dev and Vitest, @vitejs/plugin-vue inlines <script setup> into the
// bare `.vue` module id, which the plugin's default filter (js/ts only) skips.
const isCssInJsSource = (fileId: string, code: string) => {
  const [path, query = ""] = fileId.split("?");
  const isScriptModule =
    /\.(vue|ts|js)$/.test(path) && !query.includes("type=style");

  return (
    isScriptModule && !path.includes("node_modules") && code.includes("css")
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
  },
});
