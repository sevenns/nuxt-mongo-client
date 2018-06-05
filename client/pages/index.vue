<template lang='pug'>

.div
  vheader

  .content
    h1 Nuxt MongoDB client app
    nuxt-link.link(to='/posts') View posts

</template>

<script>

import Header from '~/components/Header'

export default {
  components: { vheader: Header }
}

</script>
