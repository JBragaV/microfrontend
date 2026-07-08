import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        cardapio: {
          type: "module",
          name: "cardapio",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "cardapio",
          shareScope: "default",
        },
        pedido: {
          type: "module",
          name: "pedido",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "pedido",
          shareScope: "default",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
    origin: "http://localhost:3000",
  },
  build: {
    target: "esnext",
  },
});