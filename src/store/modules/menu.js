/**
 * 导航配置
 * */
export default {
  namespaced: true,
  state: {
    // 可以在多页 tab 模式下显示的页面
    menuList: [],
    // 当前页面
    current: ''
  },
  actions: {

    /**
     * @description 打开一个新的页面
     * @param {Object} param 从路由钩子的 to 对象上获取 { name} 路由信息
     */
    open ({ state, commit, dispatch }, { name }) {
      return new Promise(async resolve => {
        commit('currentSet', name);
        // end
        resolve();
      });
    }

  },
  mutations: {

    /**
     * @class current
     * @description 设置当前激活的页面 fullPath
     * @param {Object} state vuex state
     * @param {String} fullPath new fullPath
     */
    currentSet (state, fullPath) {
      state.current = fullPath;
    },
    /**
     * @class menuList
     * @description 保存 menuList (候选池)
     * @param {Object} state vuex state
     * @param {Array} routes routes
     */
    init (state, routes) {
      const menuList = [];
      const push = function (routes) {
        console.log('menuList', routes); // log
        routes.forEach(route => {
          if (route.children) {
            push(route.children);
          } else {
            if (!route.hidden) {
              const { meta, name, path } = route;
              menuList.push({ meta, name, path });
            }
          }
        })
      };
      push(routes);
      console.log('menuList', menuList); // log
      state.menuList = menuList;
    }
  }
}
