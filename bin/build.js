const ora = require('ora')
const chalk = require('chalk')
const clear = require('clear')
const exec = require('executive')
const paths = require('../config/paths')
const { resolve } = require('path')

const config = resolve(paths.config, 'nuxt')
const spinner = ora()

clear()

spinner.start(chalk.cyan.bold('Building client...\n'))

exec.quiet(`rimraf ${paths.app}`).then(res => {
  if (res.status) {
    spinner.fail(chalk.red.bold('Building client fail.\n'))
    console.log(res.stdout)
  }

  return res.status
}).then(status => {
  if (!status) {
    return exec.quiet(`nuxt build -c ${config}`).then(res => {
      if (res.status) {
        console.log(res.stdout)
      }
  
      return res.status
    }).then(status => {
      if (status) {
        spinner.fail(chalk.red.bold('\nBuilding client fail.\n'))
      } else {
        spinner.succeed(chalk.green.bold('Building client complete.\n'))
      }
    })
  }
})
