import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
// import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
   build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'modal-react-epok974',
      fileName: 'modal-react-epok974',
    },
  },
  plugins: [react()],
})
