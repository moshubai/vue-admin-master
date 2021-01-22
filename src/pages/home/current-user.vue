<template>
  <span>
    <slot name="header" v-bind:user="user">
      {{ user.lastName }}1
    </slot>
     <slot name="footer" v-bind:user="user">
      {{ user.lastName }}2
     </slot>
  </span>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          lastName: 'lastName',
          firstName: 'firstName'
        }
      }
    }
  }
</script>

<style lang="less" scoped></style>
