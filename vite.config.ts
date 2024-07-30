import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => ({
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react(), svgr()],

  build: {
    outDir: 'dist',
  },
}));
