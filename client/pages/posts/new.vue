<template lang='pug'>

div
  vheader

  .content
    .content__header
      h1 {{ title ? title : 'New post' }}

      vbutton(
        icon='plus',
        text='Add',
        @click='add',
        :loading='isAdding',
        :disabled='!validate()'
      )

    .post-form
      input.input(
        type='text', maxlength='30',
        placeholder='Title',
        v-model='title'
      )
      textarea.textarea(
        placeholder='Text (more then 100 chars)', rows='9',
        v-model='text',
      )
      input.input(
        type='text', maxlength='30',
        placeholder='Author',
        v-model='author'
      )

</template>

<script>

import axios from '~/plugins/axios'

import Header from '~/components/Header'
import Button from '~/components/Button'

export default {
  components: {
    vheader: Header,
    vbutton: Button
  },

  data () {
    return {
      title: '',
      text: '',
      author: '',

      isAdding: false
    }
  },

  methods: {
    async add () {
      if (this.validate()) {
        this.isAdding = true

        try {
          const { data } = await axios.post('/api/posts/create', {
            title: this.title,
            text: this.text,
            author: this.author
          })

          this.title = ''
          this.text = ''
          this.author = ''

          this.$router.push(`/posts/${data.uid}`)
        } catch (error) {
          console.error(error)
        } finally {
          this.isAdding = false
        }
      }
    },

    validate () {
      return this.title && this.text.length >= 100 && this.author
    }
  }
}

</script>
