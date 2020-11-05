const fs = require('fs')

const gitignore = [
  '*.class',
  '*.iml',
  '*.jar',
  '*.log',
  '*.py[cod]',
  '*.sublime-project',
  '*.sublime-workspace',
  '*.swn',
  '*.swo',
  '*.swp',
  '*~',
  '.DS_STORE',
  '*.app',
  '*.avi',
  '*.exe',
  '*.flv',
  '*.mov',
  '*.mp4',
  '*.tiff',
  '*.war',
  '*.wmv',
  '.idea',
  '.module-cache',
  '.vscode',
  '.yarn-lock',
  '/*.js',
  '/dist',
  '/hot',
  '/target',
  '/index.html',
  'node_modules',
  'package-lock.json',
  'TEST*.xml',
  'Thumbs.db',
  'yarn.lock',
]

const prepare = [
  '.babelrc.json',
  '.editorconfig',
  '.eslintignore',
  '.eslintrc.json',
  '.git',
  '.gitignore',
  '.prettierignore',
  '.prettierrc.json',
  '.npmignore',
  '/assets',
  'app',
  'CHANGELOG.md',
  'LICENSE',
  'package.json',
  'README.md',
  'src',
]

const components = fs.readdirSync('src').filter(item => !/(\.(t|j)sx?$)/.test(item))

module.exports.prepare = [...prepare, 'node_modules']

module.exports.components = components

fs.writeFileSync('.npmignore', [...gitignore].join('\n'))
fs.writeFileSync('.gitignore', [...gitignore, ...components.map(item => `/${item}`)].join('\n'))
