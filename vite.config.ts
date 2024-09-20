// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

function getFacadeModuleId(facadeModuleId: string | null) {
  if (facadeModuleId) {
    if (facadeModuleId.includes("module")) {
      return "Homepage";
    }
    return facadeModuleId.split("/").slice(-2, -1)[0];
  }
  return "Homepage";
}

export default defineConfig({
  base: "/HRNet/",
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          preloadLinks: "", // Placeholder for preload links
        },
      },
      minify: true,
    }),
    {
      name: "inject-preload",
      enforce: "post",
      apply: "build",
      transformIndexHtml(html, { bundle }) {
        const routeAssets = {
          "/": [], // Assets for the home page
          "/employees": [], // Assets for the employees list page
        };

        // Analyze bundle to determine which assets belong to which route
        Object.values(bundle).forEach((chunk) => {
          if (chunk.fileName.includes("homepage")) {
            if (!routeAssets["/"].includes(chunk.fileName)) {
              routeAssets["/"].push(chunk.fileName);
            }
          } else if (chunk.fileName.includes("employeeslist")) {
            if (!routeAssets["/employees"].includes(chunk.fileName)) {
              routeAssets["/employees"].push(chunk.fileName);
            }
          }
        });

        const getCurrentRoute = () => {
          if (typeof window !== "undefined") {
            const path = window.location.pathname;
            if (path.includes("employees")) {
              return "/employees";
            }
          }
          return "/";
        };
        // Determine current route (this is a simplified example)
        const currentRoute = getCurrentRoute();

        const assetsToPreload = routeAssets[currentRoute] || [];
        if (assetsToPreload.length > 0) {
          console.log(
            "Assets to preload for route",
            currentRoute,
            ":",
            assetsToPreload,
          );
          const preloadLinks = assetsToPreload
            .map((fileName) => {
              if (fileName.endsWith(".js")) {
                return `<link rel="preload" href="${fileName}" as="script" crossorigin="anonymous">`;
              } else if (fileName.endsWith(".css")) {
                return `<link rel="preload" href="${fileName}" as="style">`;
              } else {
                throw new Error("Unknown asset type");
              }
            })
            .join("\n");

          // Inject preload links into the HTML
          html = html.replace("</head>", `${preloadLinks}</head>`);
          console.log(
            "Preload links injected into index.html for route",
            currentRoute,
          );
        } else {
          console.log("No assets found to preload for route", currentRoute);
        }

        // Log all chunks in the bundle for verification
        console.log("All chunks in the bundle:", Object.keys(bundle));
        return html;
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = getFacadeModuleId(chunkInfo.facadeModuleId);

          if (facadeModuleId.includes("Homepage")) {
            return "lazy-homepage-[hash].js";
          }
          if (facadeModuleId.includes("EmployeesList")) {
            return "lazy-employeeslist-[hash].js";
          }
          return `lazy-${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.source.includes("datepicker")) {
            return "assets/homepage-[hash].css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    modulePreload: {
      resolveDependencies(url, deps) {
        return deps.filter((dep) => !/lazy-\w+\.js$/.test(dep));
      },
    },
  },
});
