const watch = require('./config/watch')
const entry = require('./config/entry')
const modules = require('./config/modules')
const resolve = require('./config/resolve')
const plugins = require('./config/plugins')
const optimization = require('./config/optimization')
const devServer = require('./config/devServer')
const output = require('./config/output')

module.exports = (env, argv) => {
  const target = 'web'
  const mode = 'development'
  const lang = argv.lang || 'pt-br'
  const { npm_lifecycle_event: lifecycle } = process.env

  return {
    target,
    mode,
    resolve,
    devServer,
    module: modules,
    entry: entry(),
    optimization: optimization(),
    output: output({ lifecycle }),
    watch: watch({ lifecycle }),
    plugins: plugins({ lang }),
  }
}
