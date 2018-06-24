<template lang='pug'>

.post
  nuxt-link.post__title(:to='link')
    h3 {{ title }}
  p {{ cropText(text, 200) }}
  .post__footer
    .post__author
      icon(name='author', height='24')
      | {{ author }}
    .post__date
      icon(name='calendar', height='24')
      | {{ convertDate(date) }}

</template>

<script>

import moment from 'moment'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },

  methods: {
    cropText (text, length) {
      const croppedText = text.slice(0, length)

      return text.length <= length ? text : `${croppedText}...`
    },

    convertDate (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}

</script>
