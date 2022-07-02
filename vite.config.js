import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-react-svg";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactSvgPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@components": path.resolve(__dirname, "src", "components"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "./templates",
    ],
  },
});
