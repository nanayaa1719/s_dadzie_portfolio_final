import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  base: '/s_dadzie_portfolio_final/',  // This is required for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
    plugins: [
      NodeGlobalsPolyfillPlugin({
        buffer: true,
      }),
    ],
  },
});
"// Minor change to trigger deployment" 
