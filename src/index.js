// https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_env
// https://man7.org/linux/man-pages/man7/environ.7.html
// https://survivejs.com/webpack/techniques/i18n/

// Mudar forma de Set de environments para --env
// Mudar o env da i18n para um argv
// Utilizar o plugin da i18n do webpack

// Concluir eslint
// ADD commitlint.config.js
// ADD Jest
// ADD Newrelic

// Erik Garces
// Muito bom o commitlint.config.js
// https://bitbucket.org/webmotors/webmotors.cockpit.videoconference.ui/src/master/.stylelintrc.js O Eslint não faz a mesma coisa que o stylelintrc?
// Porque utilizar o jsconfig.json

import React from 'react'
import { render } from 'react-dom'
import App from '../app/local'

render(<App />, document.getElementById('root'))
