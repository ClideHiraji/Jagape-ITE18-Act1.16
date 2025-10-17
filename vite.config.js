import { defineConfig } from 'vite'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default defineConfig({
  root: '.',                  // index.html in project root
  publicDir: 'static',        // optional static assets folder
  base: process.env.NODE_ENV === 'production'
    ? '/Jagape-ITE18-Act1.16/'  // your GitHub repo name
    : '/',
  server: {
    host: true,
    open: !isCodeSandbox
  },
  build: {
    outDir: 'dist',           // dist folder inside project root
    emptyOutDir: true,
    sourcemap: true
  }
})
