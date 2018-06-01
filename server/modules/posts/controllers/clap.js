'use strict'

import { ObjectId } from 'koa-mongo'

export default async (context) => {
  const db = context.mongo.db('nuxt-mongo')
  const { uid, claps } = context.request.body
  await db.collection('posts').findAndModify(
    { _id: ObjectId(uid) },
    [],
    { $set: { claps: claps + 1 } },
    { new: true, upsert: true }
  )

  return 'OK'
}
