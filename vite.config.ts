import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name) {
            let extType = assetInfo.name.split('.')[0];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          }
          return '';
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',

        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  envPrefix: 'REACT_APP_',
  resolve: {
    alias: {
      '@': './src',
    },
  },
  plugins: [react()],
});
