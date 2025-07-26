import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Portfolio/", // ← nom exact du dépôt GitHub
  plugins: [tailwindcss(), react()],
});
