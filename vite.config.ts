import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    allowedHosts:true,
    host: true,
    port: 5333,
     proxy: {
      "/send-mail.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
})
