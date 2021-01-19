<template>
  <div class="login_pge">
    <div class="logo_hearder">
      <span @click.stop="userHandle('login')">登录</span>
      <span>|</span>
      <span @click.stop="userHandle('register')">注册</span>
    </div>

    <transition
      enter-active-class="animated flipInY"
      leave-active-class="animated flipOutY"
      :duration="durationLogin"
    >
      <div class="login_container" v-show="!isRegister">
        <h4 class="title">欢迎登录</h4>
        <Form status-icon ref="ruleForm">
          <FormItem>
            <Input
              prefix-icon="el-icon-place"
              v-model="username"
              autocomplete="off"
            ></Input>
          </FormItem>
          <FormItem style="margin-bottom:10px">
            <Input
              type="password"
              prefix-icon="el-icon-unlock"
              v-model="password"
              autocomplete="off"
            ></Input>
          </FormItem>
          <FormItem style="margin-bottom:0px">
            <p class="choose">
              <Checkbox v-model="checked">记住密码</Checkbox>
              <span @click="forgetPassword">忘记密码</span>
            </p>
          </FormItem>
          <FormItem>
            <Button style="width:100%" type="primary" @click="submitForm"
              >登&nbsp;&nbsp;录</Button
            >
          </FormItem>
        </Form>
      </div>
    </transition>
    <transition
      enter-active-class="animated flipInY"
      leave-active-class="animated flipOutY"
      :duration="durationRegister"
    >
      <div class="login_container" v-show="isRegister">
        <h4 class="title">欢迎注册</h4>
        <Form status-icon ref="ruleForm">
          <FormItem>
            <Input
              prefix-icon="el-icon-place"
              v-model="username"
              autocomplete="off"
            ></Input>
          </FormItem>
          <FormItem style="margin-bottom:10px">
            <Input
              type="password"
              prefix-icon="el-icon-unlock"
              v-model="password"
              autocomplete="off"
            ></Input>
          </FormItem>
          <FormItem style="margin-bottom:0px">
            <p class="choose">
              <Checkbox v-model="checked">记住密码</Checkbox>
              <span @click="forgetPassword">忘记密码</span>
            </p>
          </FormItem>
          <FormItem>
            <Button style="width:100%" type="primary" @click="submitForm"
              >登&nbsp;&nbsp;录</Button
            >
          </FormItem>
        </Form>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'LoginPage',
    data () {
      return {
        durationLogin: 0,
        durationRegister: 0,
        isRegister: false,
        username: 'admin',
        password: '123456',
        checked: true
      }
    },
    methods: {
      ...mapActions('account/account', ['login']),
      // 用户操作
      userHandle (type) {
        this.showFlag = true
        // 注册
        if (type === 'register') {
          this.durationLogin = 0
          this.durationRegister = 10000
          this.isRegister = true
        } else {
          this.durationLogin = 10000
          this.durationRegister = 0
          this.isRegister = false
        }
      },
      submitForm () {
        this.login({
          username: this.username,
          password: this.password
        }).then(res => {
          this.$router.replace({
            path: '/home'
          })
        })
      },
      forgetPassword () {
        this.$router.replace({
          path: '/forgetpassword'
        })
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
  .logo_hearder {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 170px;
    position: absolute;
    top: 35px;
    z-index: 50;
    cursor: pointer;
    color: #66b1ff;
    span {
      &:nth-child(2) {
        color: #999999;
        margin: 0px 10px;
        display: inline-block;
      }
    }
  }
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
    letter-spacing: 2px;
  }
  .choose {
    width: 100%;
    text-align: left;
    span {
      float: right;
      color: #66b1ff;
      cursor: pointer;
    }
  }
}
</style>
