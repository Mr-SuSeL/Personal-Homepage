import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 

export default defineConfig({
  base: '/Personal-Homepage/',
  plugins: [
    svgr(), 
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler'],
        ],
      },
    }),
  ],
})