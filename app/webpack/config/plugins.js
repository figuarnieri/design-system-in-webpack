const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ lang }) => {
  const htmlConfig = {
    lang,
    title: 'Eleanor',
    filename: 'index.html',
    inject: 'body',
    template: path.resolve(__dirname, '../template/index.html'),
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
      unicode: {
        charset: 'UTF-8',
      },
    },
  }

  return [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(htmlConfig),
  ]
}
