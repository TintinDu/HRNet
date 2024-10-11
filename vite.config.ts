import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/HRNet/",
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("src/pages/Homepage")) {
            return "homepage";
          }
          if (id.includes("src/pages/EmployeesList")) {
            return "employeesList";
          }

          if (id.includes("node_modules/react-datepicker")) {
            return "datepicker";
          }
          if (id.includes("node_modules/react-select")) {
            return "select";
          }
        },
      },
    },
    modulePreload: {
      polyfill: true,
    },
    target: "esnext",
    minify: "terser",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
