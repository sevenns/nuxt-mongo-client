const paths = require('../paths')
const { resolve } = require('path')

const styles = resolve(paths.client, 'assets/styles')

module.exports = {
  postcss: {
    plugins: { autoprefixer: {} }
  },

  extend (config) {
    config.resolve.alias.styles = styles
  }
}
