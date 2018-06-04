const paths = require('../paths')

module.exports = {
  postcss: {
    plugins: { autoprefixer: {} }
  },

  extend (config) {
    config.resolve.alias['~styles'] = paths.client
    config.resolve.alias['~components'] = `${paths.client}/components`
  }
}
