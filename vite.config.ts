import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Configuration complète
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), // Plugin React pour Vite
  ],
  server: {
    host: true, // Permet d'accéder au serveur via le réseau local
    port: 3000, // Port local pour le développement
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias pour simplifier les imports
    },
  },
  build: {
    outDir: "dist", // Répertoire de sortie pour le build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Entrée principale
      },
    },
  },
  define: {
    "process.env": {}, // Ajouté pour la compatibilité avec certaines librairies utilisant `process.env`
  },
}));
