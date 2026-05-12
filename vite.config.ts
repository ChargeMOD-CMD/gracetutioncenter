import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { componentTagger } from "lovable-tagger";

// For GitHub Pages project sites, set VITE_BASE to "/<repo-name>/" at build time.
// Hash routing (#/path) is used so deep links work without server config.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig(({ mode }) => ({
  base,
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080,
  },
}));
