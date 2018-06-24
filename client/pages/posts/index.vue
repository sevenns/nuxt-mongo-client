<template lang='pug'>

div
  vheader

  .content
    .content__header
      h1 Posts

      vbutton(
        icon='plus',
        text='New post',
        to='/posts/new'
      )

    .posts(v-if='posts.length')
      post(
        v-for='post in posts',
        :key='post._id',
        :title='post.title',
        :text='post.text',
        :author='post.author',
        :date='new Date(post.createdAt)',
        :link='generatePostLink(post._id)'
      )

    .posts(v-else)
      span Nothing to show :(

</template>

<script>

import { mapGetters } from 'vuex'
import Header from '~/components/Header'
import Button from '~/components/Button'
import Post from '~/components/Post'

export default {
  components: {
    post: Post,
    vheader: Header,
    vbutton: Button
  },

  async fetch ({ store }) {
    await store.dispatch('posts/fetch')
  },

  computed: mapGetters({ posts: 'posts/GET' }),

  methods: {
    generatePostLink (uid) {
      return `/posts/${uid}`
    }
  }
}

</script>
