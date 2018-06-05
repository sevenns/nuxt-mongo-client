const { ObjectId } = require('koa-mongo')

module.exports = async (context) => {
  const { db } = context
  const { uid, claps } = context.request.body
  await db.collection('posts').findAndModify(
    { _id: ObjectId(uid) },
    [],
    { $set: { claps: claps + 1 } },
    { new: true, upsert: true }
  )

  return 'OK'
}
