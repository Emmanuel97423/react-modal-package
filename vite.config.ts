import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
   build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'modal-react-epok974',
      fileName: (format) => `modal-react-epok974.${format}.js`,
    },
    rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
  },
  plugins: [react(), dts({
            insertTypesEntry: true,
        })],
})
