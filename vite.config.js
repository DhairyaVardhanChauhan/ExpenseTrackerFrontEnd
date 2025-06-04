import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/auth/v1": {
        target: "http://localhost:9898",
        changeOrigin: true,
        secure: false,
      },
      "/ping": {
        target: "http://localhost:9898",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
