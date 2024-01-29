import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "@emotion",
            {
              // sourceMap is on by default but source maps are dead code eliminated in production
              sourceMap: true,
              autoLabel: "dev-only",
              labelFormat: "[local]",
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
});
