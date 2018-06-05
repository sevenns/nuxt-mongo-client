const Router = require('koa-trie-router')
const mount = require('koa-mount')

const posts = require('./modules/posts')

const router = new Router()

module.exports = () => {
  router.use(mount('/posts', posts()))

  return router.middleware()
}
