const router = require('../../helpers/router')
const Post = require('../../models/posts/post')

module.exports = router('/create', 'post', async ({ context }) => {
  const data = context.request.body
  let post = null

  data.claps = 0

  post = await Post.create(data)

  return { uid: post._id }
})
