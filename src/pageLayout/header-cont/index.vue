<template>
  <div class="header">
    <span class="logo">
      这里放LOGO
    </span>
    <div class="header_right">
      <el-avatar
        shape="square"
        size="small"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></el-avatar>
      <span class="name">墨书白</span>
      <span class="home"></span>
      <span class="signout" @click="signout"></span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {};
    },
    methods: {
      ...mapActions('account/account', ['logout']),
      signout () {
        this.logout({
          confirm: true,
          vm: this
        })
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
