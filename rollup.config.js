import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  plugins: [
    resolve({
      module: true,
      main: false
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    json({
      include: 'node_modules/**'
    })
  ]
}
