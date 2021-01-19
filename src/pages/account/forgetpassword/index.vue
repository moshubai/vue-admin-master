<template>
  <div class="forget_page">
    <div class="forget_container">
      <h4 class="title">找回密码</h4>
      <Form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="100">
        <FormItem label="注册手机" prop="phone">
          <Input placeholder="请输入手机号" v-model="ruleForm.phone"></Input>
        </FormItem>
        <FormItem label="验证码" prop="code">
          <Input placeholder="请输入验证码" v-model="ruleForm.code">
            <Button @click.stop="getCode" slot="append">
              <span v-if="!clickedFlag">获取验证码</span>
              <span v-if="clickedFlag"> {{ countBackwards }}s后重发 </span>
            </Button>
          </Input>
        </FormItem>
        <FormItem label="新密码" prop="npassword">
          <Input
            placeholder="请输入新密码"
            v-model="ruleForm.npassword"
          ></Input>
        </FormItem>
        <FormItem label="确认密码" prop="password">
          <Input placeholder="请确认密码" v-model="ruleForm.password"></Input>
        </FormItem>
        <FormItem>
          <Button style="width:100%" type="primary" @click="submitForm"
            >确认修改</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForgetPasswordPage',
    components: {},
    data () {
      const validatePassword = (rule, val, callback) => {
        if (!val) {
          callback(new Error('请输入密码'))
        } else {
          var numasc = 0
          var charasc = 0
          var otherasc = 0

          if (val.length < 8 || val.length > 16) {
            callback(new Error('要求8-16位字符'))
          }
          // 判断数字
          for (var i = 0; i < val.length; i++) {
            var asciiNumber = val.substr(i, 1).charCodeAt()
            if (asciiNumber >= 48 && asciiNumber <= 57) {
              numasc += 1
            }
            // 判断大小写字母
            if (
              (asciiNumber >= 65 && asciiNumber <= 90) ||
              (asciiNumber >= 97 && asciiNumber <= 122)
            ) {
              charasc += 1
            }
            // 判断特殊字符
            if (
              (asciiNumber >= 33 && asciiNumber <= 47) ||
              (asciiNumber >= 58 && asciiNumber <= 64) ||
              (asciiNumber >= 91 && asciiNumber <= 96) ||
              (asciiNumber >= 123 && asciiNumber <= 126)
            ) {
              otherasc += 1
            }
          }
          if (+numasc === 0) {
            callback(new Error('密码须包含数字'))
          } else if (+charasc === 0) {
            callback(new Error('密码须包含字母'))
          } else if (+otherasc === 0) {
            callback(new Error('密码须包含特殊字符'))
          } else {
            callback()
          }
        }
      }
      const passwordCheck = (rule, value, callback) => {
        if (!value) return callback(new Error('请再次输入密码'))
        if (value !== this.formItem.password) {
          return callback(new Error('两次输入的密码不相同'))
        }
        callback()
      }
      return {
        countBackwards: 0,
        second: 60,
        timer: null,
        clickedFlag: false,
        ruleForm: {
          phone: '',
          code: '',
          npassword: '',
          password: ''
        },
        rules: {
          phone: [
            { required: true, message: '必须为有效的电话号码', trigger: 'blur' }
          ],
          code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
          npassword: [
            {
              required: true,
              validator: validatePassword,
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              validator: passwordCheck,
              trigger: 'blur'
            }
          ]
        }
      }
    },
    computed: {},
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$Message.error('submit')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      getCode () {
        if (!/^1[3456789]\d{9}$/.test(this.ruleForm.phone)) {
          this.$Message.error('手机号不可用')
          return
        }
        console.log(this.$refs.ruleForm.validateField('phone'))
        if (!this.ruleForm.phone) {
          this.$refs.ruleForm.validateField('phone')
          return false
        }

        this.clickedFlag = true
        this.countBackwards = this.second

        this.clickedFlag = true
        this.countTime()
      },
      countTime () {
        this.timer = null
        if (this.countBackwards > 0) {
          this.countBackwards--
          this.timer = setTimeout(this.countTime, 1000)
        } else {
          this.clickedFlag = false
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.forget_page {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;

  .forget_container {
    width: 600px;
    display: inline-block;
    background: #ffffff;
    border-radius: 1.3889vh;
    padding: 2.7778vh 4.6296vh;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 2.037vh;
    font-weight: 600;
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
/deep/.Input-group__append button.Button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
