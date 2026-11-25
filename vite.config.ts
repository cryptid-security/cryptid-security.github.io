import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Org site (cryptid-security.github.io) deploys at the domain root.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
