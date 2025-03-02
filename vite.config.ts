import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: 'react'
    }),
    nodePolyfills({ globals: { global: true } })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
