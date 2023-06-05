import { defineConfig, UserConfigExport  } from 'vite';
import { resolve } from 'path';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';




// https://vitejs.dev/config/
export default defineConfig({
   build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'modal-react-epok974',
       formats: ['es', 'umd'],
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
