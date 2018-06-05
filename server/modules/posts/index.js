const Router = require('koa-trie-router')
const index = require('./routes')
const post = require('./routes/post')
const clap = require('./routes/clap')

const router = new Router()

module.exports = () => {
  router.get(index())
  router.post(post())
  router.post(clap())

  return router.middleware()
}
