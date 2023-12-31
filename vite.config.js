import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Specify the correct entry point file
    rollupOptions: {
      input: 'src/main.jsx',
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
})