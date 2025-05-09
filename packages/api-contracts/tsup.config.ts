import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  splitting: false,
  clean: true
})
