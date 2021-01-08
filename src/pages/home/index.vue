<template>
  <div class="home">
    <p>counet:{{ count }}</p>
    <!-- <p>测试getters：{{ doubleCount }}</p> -->
    <el-button @click="add">数字增加</el-button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'home-page-index',
    components: {},
    computed: {
      ...mapState('admin/try', ['count']),
      ...mapGetters('admin/try', ['getterFn'])
    },
    methods: {
      ...mapActions('admin/try', ['addFn']),
      add () {
        console.log(this.$store);
        //   this.$store.commit("admin/try/add"); // 同步
        //   this.$store.dispatch("admin/try/addFn"); // 异步
        this.addFn();
      //   console.log(this.getterFn);
      }
    }
  };
</script>
<style lang="less" scoped>
.home {
  p {
    width: 100%;
    line-height: 50px;
    color: #333333;
    a {
      color: #000000;
    }
  }
}
</style>
