import { defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { createServer } from "./server";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        "./src",
        "./shared",
        path.resolve(__dirname, "."), // Add this line to allow the root directory
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  base: process.env.VITE_BASE_PATH || "/",
}));
