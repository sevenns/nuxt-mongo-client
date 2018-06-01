'use strict'

export default async (context) => {
  const db = context.mongo.db('nuxt-mongo')
  const result = await db.collection('posts').find().toArray()

  return result
}
