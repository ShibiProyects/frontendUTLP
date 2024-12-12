import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // Puedes cambiar '/src' a cualquier ruta que desees
    },
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
