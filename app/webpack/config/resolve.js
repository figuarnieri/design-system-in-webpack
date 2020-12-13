const path = require('path')

module.exports = {
  extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '~': path.resolve(__dirname, '../../../src'),
    '#': path.resolve(__dirname, '../../local'),
    'eleanor-webpack': path.resolve(__dirname, '../../..'),
  },
}
