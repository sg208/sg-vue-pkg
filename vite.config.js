import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "sg208-button",
      fileName: "sg208-button",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "es",
        globals: {
          vue: "Vue",
        },
        entryFileNames: "sg208-button.[format].js",
      },
    },
  },
  plugins: [vue()],
});
