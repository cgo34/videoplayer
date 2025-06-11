import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    alias: {
      '@domain': path.resolve(__dirname, 'src/@domain'),
      '@application': path.resolve(__dirname, 'src/@application'),
      '@infrastructure': path.resolve(__dirname, 'src/@infrastructure'),
      '@presentation': path.resolve(__dirname, 'src/@presentation'),
      '@shared': path.resolve(__dirname, 'src/@shared'),
    },
    testTimeout: 10000, // 10 secondes pour chaque test
  },
});
