const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')

const root = path.resolve(__dirname, '../../..')
const fileBabel = path.resolve(__dirname, '../babel/babel.config.json')

module.exports = ({ lifecycle }) => ({
  filename: filename => {
    const { name: component } = filename.chunk
    const src = 'src'
    const componentSuccess = []
    const srcFolder = path.resolve(root, src, component)
    const toBabel = componentFile => {
      if (fs.existsSync(componentFile)) {
        babel.transformFile(
          componentFile,
          {
            filename: fileBabel,
            compact: true,
            minified: true,
          },
          (err, data) => {
            const pathRaw = componentFile.split(path.sep)
            const pathSrcIndex = pathRaw.indexOf(src)
            pathRaw.splice(pathSrcIndex, 1)
            const pathComponent = pathRaw.join(path.sep)
            const { dir, name } = path.parse(pathComponent)
            fs.mkdirSync(dir, { recursive: true })
            fs.writeFileSync(path.resolve(dir, `${name}.js`), data.code)
            if (!componentSuccess.includes(component)) {
              componentSuccess.push(component)
              console.log('\x1b[32m%s\x1b[0m', `✔ ${component}`)
            }
          }
        )
      }
    }
    const searchRecursive = componentPath => {
      fs.readdir(componentPath, (directoryError, directory) => {
        if (directoryError) {
          const regexIndex = new RegExp(`src\\${path.sep}index$`)
          if (!regexIndex.test(componentPath)) {
            toBabel(`${componentPath}.js`)
          }
        } else {
          directory.forEach(item => {
            const filename = path.resolve(componentPath, item)
            fs.stat(filename, (fileError, fileData) => {
              fileData.isDirectory() ? searchRecursive(filename) : toBabel(filename)
            })
          })
        }
      })
    }
    searchRecursive(srcFolder)
    return `[name]/index.js`
  },
  chunkFilename: '[chunkhash].js',
  path: lifecycle === 'start' ? root : path.resolve(root, 'hot'),
  publicPath: '/',
})
