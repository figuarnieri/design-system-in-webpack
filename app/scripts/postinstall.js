const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const modulesPath = path.resolve(process.cwd(), '..')
const modulesSplit = modulesPath.split(path.sep)
const modulesFolder = modulesSplit[modulesSplit.length - 1]

if (modulesFolder === 'node_modules') {
  const rootEleanor = path.resolve(__dirname, '../..')
  const rootProject = path.resolve(modulesPath, '..')
  const jsonFileProject = fs.readFileSync(path.resolve(rootProject, 'package.json')).toString()
  const jsonFileEleanor = fs.readFileSync(path.resolve(rootEleanor, 'package.json')).toString()
  const { dependencies: jsonProject } = JSON.parse(jsonFileProject)
  const { dependencies: jsonEleanor } = JSON.parse(jsonFileEleanor)
  const dependenciesProject = Object.keys(jsonProject || {})
  const dependenciesEleanor = Object.keys(jsonEleanor)
  const dependenciesInstall = dependenciesEleanor.filter(item => !dependenciesProject.includes(item))
  if (dependenciesInstall.length) {
    console.log(`Eleanor need install dependencies [${dependenciesInstall.join(' ')}]`)
    execSync(`cd "${rootProject}" && npm i ${dependenciesInstall.join(' ')}`)
  }
}
