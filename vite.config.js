import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'hls.js': path.resolve(__dirname, 'src/stub-hls.js'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
