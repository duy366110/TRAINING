/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
    },
    base: './',
    test: {
        globals: true,
        environment: 'jsdom'
    },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
});
