import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  // build: {
  //   rollupOptions: {
  //     external: ["react-dom/client"],
  //   },
  // },
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000,
  //   proxy: {
  //     // https://vitejs.dev/config/server-options.html
  //   },
  // },
  server: {
    host: true // This will expose the server to your network
  },
  resolve: {
    alias: {
      "@common": "/src/components/common",
    },
  },
});
