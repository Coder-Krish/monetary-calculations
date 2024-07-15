import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife' // This format is suitable for browsers
  },
  plugins: [typescript()]
};
