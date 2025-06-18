import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: true,
        open: true,
        port: 4000
    },
    build: {
        sourcemap: true
    },
    plugins: []
});
