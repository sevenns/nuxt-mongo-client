const router = require('../../helpers/router')
const Post = require('../../models/posts/post')

module.exports = router('/clap', 'post', async ({ context }) => {
  const { uid } = context.request.body

  await Post.clap(uid)
})
