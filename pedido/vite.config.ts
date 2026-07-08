import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pedido",
      filename: "remoteEntry.js",
      exposes: {
        "./Pedido": "./src/components/Pedido.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
    origin: "http://localhost:3002",
  },
  build: {
    target: "esnext",
  },
});