const Router = require('koa-trie-router')
const get = require('./get')
const create = require('./create')
const clap = require('./clap')

const router = new Router()

module.exports = () => {
  router.get(get)
  router.post(create)
  router.post(clap)

  return router.middleware()
}
