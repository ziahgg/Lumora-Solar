import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project site from https://ziahgg.github.io/Lumora-Solar/,
// so production builds (and `vite preview`) use the /Lumora-Solar/ base. The path is
// case-sensitive and must match the repository name. Dev serves from "/".
// Set BASE_PATH to override, e.g. BASE_PATH=/ for a custom domain.
export default defineConfig(({ command, isPreview }) => ({
  base: process.env.BASE_PATH ?? (command === 'build' || isPreview ? '/Lumora-Solar/' : '/'),
  plugins: [react(), tailwindcss()],
}))
