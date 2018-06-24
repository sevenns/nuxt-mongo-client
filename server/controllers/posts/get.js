const router = require('../../helpers/router')
const Post = require('../../models/posts/post')

module.exports = router('/get', 'post', async ({ context }) => {
  let result = null
  const { uid } = context.request.body

  if (uid) {
    result = await Post.findById(uid)
  } else {
    result = await Post.find().sort('-createdAt')
  }

  return result
})
