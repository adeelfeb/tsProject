
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for React with TypeScript, ShadCN, and Tailwind CSS
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // If you use '@' alias for paths in TypeScript
    },
  },
  define: {
    // Optionally define global constants if needed (e.g., process.env)
    'process.env': process.env,
  },
})

// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
