<template lang='pug'>

div
  vheader

  .content
    h1 {{ post.title }}

    .post__date
      icon(name='calendar', height='24')
      | {{ convertDate(post.createdAt) }}

    p.post__text {{ post.text }}

    .post__footer.post__footer_space
      .post__button
        vbutton(
          icon='clap',
          :text='`${post.claps}`',
          @click='clap',
          :loading='isClapping'
        )

      .post__author
        icon(name='author', height='24')
        | {{ post.author }}

</template>

<script>

import axios from '~/plugins/axios'
import moment from 'moment'

import Header from '~/components/Header'
import Button from '~/components/Button'

export default {
  components: {
    vheader: Header,
    vbutton: Button
  },

  async asyncData ({ params }) {
    const uid = params.post
    const post = await axios.post('/api/posts/get', { uid })

    return { post: post.data }
  },

  data () {
    return {
      isClapping: false
    }
  },

  methods: {
    convertDate (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    async clap () {
      try {
        this.isClapping = true
        await axios.post('/api/posts/clap', { uid: this.post._id })

        this.post.claps += 1
      } catch (error) {
        console.error(error)
      } finally {
        this.isClapping = false
      }
    }
  }
}

</script>
