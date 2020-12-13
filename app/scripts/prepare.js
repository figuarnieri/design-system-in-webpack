const fs = require('fs');
const webpackResolve = require('../webpack/config/resolve');

const gitignore = [
  '# Automatically generated file. "app/scripts/prepare.js"',
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
];

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
  'jsconfig.json',
  'LICENSE',
  'package.json',
  'README.md',
  'src',
];

const jsConfig = {
  '# Automatically generated file': 'app/scripts/prepare.js',
  exclude: ['node_modules', 'dist', 'assets'],
  compilerOptions: {
    jsx: 'react',
    target: 'es2020',
    module: 'commonjs',
  },
};
jsConfig.compilerOptions.paths = {};

Object.entries(webpackResolve.alias).forEach((item) => {
  const [key, value] = item;
  jsConfig.compilerOptions.paths[`${key}/*`] = [`${value}\\*`];
});

const components = fs.readdirSync('src').filter(item => !/(\.(t|j)sx?$)/.test(item));

module.exports.prepare = [...prepare, 'node_modules'];
module.exports.components = components;

fs.writeFileSync('.npmignore', [...gitignore].join('\n'));
fs.writeFileSync('.gitignore', [...gitignore, ...components.map(item => `/${item}`)].join('\n'));
fs.writeFileSync('jsconfig.json', JSON.stringify(jsConfig, null, 2));
