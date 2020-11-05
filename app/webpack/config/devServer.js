module.exports = {
  compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  open: true,
  host: 'localhost',
  port: 1962,
  historyApiFallback: true,
  publicPath: '/',
  inline: true,
}
