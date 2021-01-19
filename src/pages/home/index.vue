<template>
  <div class="home_content">
    <div class="media avatar_account">
      <div class="avatar_icon">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div class="content ml-15">
        <h4>欢迎您！</h4>
        <p>
          这是您第<span>1</span>次登录，上次登录日期：<span
            >2021-01-12 18:50:07</span
          >，详细信息请查看<a>日志</a>，如果不是您本人登录，请及时<a>修改密码</a>。
        </p>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="12" style="height:630px">
        <div class="grid_content bg-purple">
          <h4 class="page_title">基本介绍</h4>
          <ContentIntroduction />
        </div>
      </el-col>
      <el-col :span="12" style="height:630px">
        <div class="grid_content bg-purple">
          <h4 class="page_title">版本信息</h4>
          <TimeLine />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'home-page-index',
    components: {
      TimeLine: () => import('./tepl/timeline'),
      ContentIntroduction: () => import('./tepl/contentIntroduction')
    },
    data () {
      return {
        count: 0
      }
    },
    computed: {
      // ...mapState('admin/try', ['count']),
      // ...mapGetters('admin/try', ['getterFn'])
    },
    methods: {
      // ...mapActions('admin/try', ['addFn']),
      add () {
        console.log(this.$store)
        //   this.$store.commit("admin/try/add"); // 同步
        //   this.$store.dispatch("admin/try/addFn"); // 异步
        this.addFn()
      //   console.log(this.getterFn);
      }
    }
  }
</script>
<style lang="less" scoped>
.home_content {
  .avatar_account {
    margin-bottom: 15px;
  }
  .grid_content {
    width: 100%;
    background: #ffffff;
    padding: 0px 20px 20px;
    height: 100%;
  }
  p {
    width: 100%;
    line-height: 30px;
    color: #333333;
    a {
      color: #000000;
    }
  }
}
</style>
