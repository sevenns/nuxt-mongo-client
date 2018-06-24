const paths = require('../paths')
const { resolve } = require('path')

const styles = resolve(paths.client, 'assets/styles')

module.exports = {
  postcss: {
    plugins: { autoprefixer: {} }
  },

  vendor: ['~/plugins/axios', 'moment'],

  extend (config) {
    config.resolve.alias.styles = styles

    config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      include: [paths.client]
    })
  }
}
