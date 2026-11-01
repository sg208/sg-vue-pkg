// WHY: in dev and Vitest, @vitejs/plugin-vue inlines <script setup> into the
// bare `.vue` module id, which the plugin's default filter (js/ts only) skips.
// Only modules that import `css` from vite-css-in-js go through its Babel pass,
// which has no TypeScript parser.
const CSS_IN_JS_IMPORT =
  /import\s*\{[^}]*\bcss\b[^}]*\}\s*from\s*["']vite-css-in-js["']/;

export const isCssInJsSource = (fileId: string, code: string) => {
  const [path, query = ""] = fileId.split("?");
  const isScriptModule =
    /\.(vue|ts|js)$/.test(path) && !query.includes("type=style");

  return (
    isScriptModule &&
    !path.includes("node_modules") &&
    CSS_IN_JS_IMPORT.test(code)
  );
};
