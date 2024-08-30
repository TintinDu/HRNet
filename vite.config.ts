import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/HRNet/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
    modulePreload: {
      resolveDependencies(url, deps) {
        return deps.filter((dep) => !/lazy-\w+\.js$/.test(dep));
      },
    },
  },
});
