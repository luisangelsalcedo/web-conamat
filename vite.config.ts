import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => ({
  // base: command === 'build' ? '/project/web-conamat/' : '/',
  base: '/',
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(path.join(__dirname, 'src')),
      },
    ],
  },
  build: {
    outDir: 'dist',
  },
}));
