module.exports = async (context) => {
  const { db } = context
  const result = await db.collection('posts').find().toArray()

  return result
}
