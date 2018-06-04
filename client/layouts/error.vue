<template lang='pug'>

.error-block
  .error-block__item(v-if='error.statusCode === 404')
    .error-block__status 404
    .error-block__text Page not found
  .error-block__status(v-else) An error occurred

</template>

<script>

export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}

</script>

<style lang='sass' scoped>

@import '~styles/functions/rem'

.error-block
  text-align: center

.error-block__status
  font-size: rem(48px)

</style>