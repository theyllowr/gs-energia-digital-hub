// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { webcrypto } from 'crypto';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

// —──────────────────────────────────────────────────────────
// 1) Use createRequire para carregar o CommonJS 'crypto'
//    (para poder patchar uma property mutável)
// —──────────────────────────────────────────────────────────
const require = createRequire(import.meta.url);
const nodeCrypto: typeof import('crypto') = require('crypto');

// Monkey-patch no CommonJS crypto
nodeCrypto.getRandomValues = webcrypto.getRandomValues.bind(webcrypto);

// Também define globalThis.crypto para libs que usam globalThis
;(globalThis as any).crypto = webcrypto;

// —──────────────────────────────────────────────────────────
// 2) Cria __dirname em ambiente ESM
// —──────────────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// —──────────────────────────────────────────────────────────
// 3) Exporta a config do Vite
// —──────────────────────────────────────────────────────────
export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
