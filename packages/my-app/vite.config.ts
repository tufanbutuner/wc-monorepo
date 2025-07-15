import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const componentDir = path.resolve(__dirname, "src", "components");
const entries: Record<string, string> = {};

fs.readdirSync(componentDir).forEach((folder) => {
  const entryPath = path.join(componentDir, folder, `${folder}.tsx`);
  if (fs.existsSync(entryPath)) {
    entries[folder] = entryPath;
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
  },
  build: {
    target: "esnext",
    lib: {
      entry: "noop.js",
      formats: ["es"],
    },
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: "index.js",
        format: "es",
        preserveModules: false,
        dir: path.resolve(__dirname, "dist"),
      },
      preserveEntrySignatures: "strict",
    },
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
