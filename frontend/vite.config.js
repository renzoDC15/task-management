import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf3f6',
          100: '#fce4ec',
          500: '#d9467f',
          600: '#c53065',
          700: '#a61c4e',
        },
      },
    },
  },

})
