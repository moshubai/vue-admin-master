/**
 * 用户信息
 * */
export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {}
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {*} info info
     */
    set ({ state, dispatch }, info) {
      return new Promise(async resolve => {
        //  赋值
        state.info = info;
        resolve();
      })
    }
  }
}
