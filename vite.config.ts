import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Astrid-Yoga/', // Indispensable pour GitHub Pages sur le repo 'Astrid-Yoga'
});