const paths = require('../paths')
const head = require('./head')
const build = require('./build')
const css = require('./css')

module.exports = {
  head,
  build,
  css,

  srcDir: paths.client,
  buildDir: paths.app,
  loading: '~components/PageLoader.vue',
}
