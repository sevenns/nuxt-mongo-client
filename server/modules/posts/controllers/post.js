const { ObjectId } = require('koa-mongo')

module.exports = async (context) => {
  const db = context.mongo.db('nuxt-mongo')
  const { uid } = context.request.body
  const result = db.collection('posts').find({ _id: ObjectId(uid) }).toArray()

  return result
}
