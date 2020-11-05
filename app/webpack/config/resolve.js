const path = require('path')

module.exports = {
  extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '~': path.resolve(__dirname, '../../../src'),
    'eleanor-webpack': path.resolve(__dirname, '../../..'),
    '#': path.resolve(__dirname, '../../local'),
  },
}
