<template lang='pug'>

div
  vheader

  .content
    h1 Posts

    .posts
      post(
        v-for='post in posts',
        :key='post._id',
        :title='post.title',
        :text='post.texts[0]',
        :date='convertDate(post.date)',
        :link='generatePostLink(post._id)'
      )

</template>

<script>

import { mapGetters } from 'vuex'
import Header from '~/components/Header'
import Post from '~/components/Post'

export default {
  components: {
    post: Post,
    vheader: Header
  },

  async fetch ({ store }) {
    await store.dispatch('posts/fetch')
  },

  computed: mapGetters({ posts: 'posts/GET' }),

  methods: {
    convertDate (date) {
      return new Date(date).toLocaleString('en')
    },

    generatePostLink (uid) {
      return `/posts/${uid}`
    }
  }
}

</script>
