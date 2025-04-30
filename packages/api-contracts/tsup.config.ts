import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/users.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  splitting: false,
  clean: true
})
