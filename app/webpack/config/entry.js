const path = require('path')
const { components } = require('../../scripts/prepare')

module.exports = () => {
  const pathSrc = name => path.resolve(__dirname, `../../../src/${name}`)
  const entriesObject = { index: pathSrc('') }
  components.forEach(item => {
    entriesObject[item] = pathSrc(item)
  })
  return entriesObject
}
