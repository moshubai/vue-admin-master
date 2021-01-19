/**
 * 注册、登录、注销
 * */
import util from '@/libs/util';
import router from '@/router';
import Api from '@/api';
import { MessageBox } from 'element-ui';
export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object} param context
     * @param {Object} param username {String} 账号
     * @param {Object} param password {String} 密码
     */
    login ({ dispatch }, {
      username = '',
      password = ''
    } = {}) {
      return new Promise((resolve, reject) => {
        Api.AccountLogin({
          username,
          password
        })
          .then(async res => {
            const { token } = res
            util.cookies.set('token', token);
            // 设置 vuex 用户信息
            await dispatch('user/user/set', res, { root: true });
            resolve(res);
          })
          .catch(err => {
            reject(err);
          })
      })
    },
    /**
     * @description 退出登录
     * */
    logout ({ commit, dispatch }, { confirm = false, vm } = {}) {
      async function logout () {
        await Api.AccountLogout().then(async res => {
          // 删除cookie
          util.cookies.remove('token');
          // 清空 vuex 用户信息
          await dispatch('user/user/set', {}, { root: true });
          // 跳转路由
          router.push({
            name: 'login'
          });
        })
      }

      if (confirm) {
        MessageBox.confirm('此操作将退出当前用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          logout();
        }).catch(() => {
          console.log('取消');
        });
      } else {
        logout();
      }
    }
    /**
     * @description 注册
     * @param {Object} param context
     * @param {Object} param mail {String} 邮箱
     * @param {Object} param password {String} 密码
     * @param {Object} param mobile {String} 手机号码
     * @param {Object} param captcha {String} 验证码
     */
    // register ({ dispatch }, {
    //     mail = '',
    //     password = '',
    //     mobile = '',
    //     captcha = ''
    // } = {}) {
    //     return new Promise((resolve, reject) => {
    //         // 开始请求登录接口
    //         AccountRegister({
    //             mail,
    //             password,
    //             mobile,
    //             captcha
    //         })
    //             .then(async res => {
    //                 // 注册成功后，完成与登录一致的操作
    //                 // 注册也可视情况不返还 uuid、token 等数据，在注册完成后，由前端自动执行一次登录逻辑
    //                 util.cookies.set('token', res.token);
    //                 // 设置 vuex 用户信息
    //                 await dispatch('admin/user/set', res.info, { root: true });
    //                 // 用户登录后从持久化数据加载一系列的设置
    //                 // 结束
    //                 resolve();
    //             })
    //             .catch(err => {
    //                 // console.log('err: ', err);
    //                 reject(err);
    //             })
    //     })
    // },

  }
};
