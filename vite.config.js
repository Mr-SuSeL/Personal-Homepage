import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({

  base: '/Personal-Homepage/',
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler']
        ],
      },
    }),
  ],
})
