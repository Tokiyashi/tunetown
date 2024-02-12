import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return
        }
        warn(warning)
      },
    },
  },
  server: {
    port: 3000,
    host:true,
    hmr: {
      host: '0.0.0.0',
      port: 3010,
    },
  },
  preview:{
    host: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
