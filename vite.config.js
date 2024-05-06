import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pes-web/",
  plugins: [react()],
  assetsInclude: ["**/*.WEBM", "**/*.PNG"],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
