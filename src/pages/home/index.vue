<template>
  <div class="home_content">
    <div class="media avatar_account">
      <div class="avatar_icon">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
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
    <Row :gutter="20">
      <Col :span="12" style="height:530px">
        <div class="grid_content bg-purple">
          <h4 class="page_title">基本介绍</h4>
          <ContentIntroduction />
          <!--  -->
          <current-user>
            <template v-slot:header="slotProps">
              {{ slotProps.user.firstName }}3
            </template>
            <template v-slot:footer="slotProp">
              {{ slotProp.user.firstName }}4
            </template>
          </current-user>
          <!--  -->
          <Commodity/>
          <!--  -->
        </div>
      </Col>
      <Col :span="12" style="height:530px">
        <div class="grid_content bg-purple">
          <h4 class="page_title">版本信息</h4>
          <TimeLine />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'home-page-index',
    components: {
      TimeLine: () => import('./tepl/timeline'),
      ContentIntroduction: () => import('./tepl/contentIntroduction'),
      CurrentUser: () => import('./current-user'),
      Commodity: () => import('./Commodity')
    },
    data () {
      return {
        count: 0

      }
    },
    computed: {},
    methods: {}
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
