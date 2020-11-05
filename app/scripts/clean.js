const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { prepare } = require('./prepare')

fs.readdir(path.resolve(__dirname, '../..'), (err, fileList) => {
  fileList.forEach(file => {
    if (!prepare.includes(file)) {
      exec(`rm -rf ${file}`)
    }
  })
})
