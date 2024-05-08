import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.WEBM", "**/*.MP4", "**/*.PNG"],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
