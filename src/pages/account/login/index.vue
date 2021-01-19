<template>
  <div class="login_pge">
    <div class="login_container">
      <h4 class="title">登&nbsp;&nbsp;录</h4>
      <el-form status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item>
          <el-input
            prefix-icon="el-icon-place"
            v-model="username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px">
          <el-input
            type="password"
            prefix-icon="el-icon-unlock"
            v-model="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:0px">
          <p class="choose">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <span>忘记密码</span>
          </p>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm"
            >登&nbsp;&nbsp;录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'LoginPge',
    data () {
      return {
        username: 'admin',
        password: '123456',
        checked: true
      }
    },
    methods: {
      ...mapActions('account/account', ['login']),
      submitForm () {
        this.login({
          username: this.username,
          password: this.password
        }).then((res) => {
          this.$router.replace({
            path: '/home'
          });
        });
      }
    }
  }
</script>
<style lang="less" scoped>
.login_pge {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  .login_container {
    width: 500px;
    display: inline-block;
    background: #ffffff;
    border-radius: 1.3889vh;
    padding: 2.7778vh 4.6296vh;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 1.8519vh;
    font-weight: 500;
    color: #666666;
    margin-bottom: 1.8519vh;
  }
  .choose{
    width: 100%;
    text-align: left;
    span{
      float: right;
    }
  }
}
</style>
