<template>
  <div class="header">
    <span class="logo">
      这里放LOGO
    </span>
    <div class="header_right">
      <Avatar :src="info.avatar" />
      <span class="name">{{ info.userName }}</span>
      <span class="home" @click="goHome"></span>
      <span class="signout" @click="signout"></span>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState('user/user', ['info'])
    },
    mounted () {},
    methods: {
      ...mapActions('account/account', ['logout']),
      signout () {
        this.logout({
          confirm: true,
          vm: this
        })
      },
      goHome () {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style lang="less" scoped></style>
