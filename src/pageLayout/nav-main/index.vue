<template>
  <div class="mainNav">
    <div class="boxs">
      <Menu
        mode="horizontal"
        :active-name="openName"
        @on-select="handleOpen"
        @on-open-change="handleClose"
      >
        <MenuItem
          v-for="(item, i) in menuList"
          :to="item.path"
          :name="item.name"
          :key="i"
        >
          {{ item.meta.title }}
        </MenuItem>
        <!-- <MenuItem name="2" to="/allworks">
          全部作品
        </MenuItem>
        <MenuItem name="3" to="/leaderboard">
          排行版
        </MenuItem>
        <MenuItem name="4">
          充值
        </MenuItem>
        <MenuItem name="5">
          作者专区
        </MenuItem> -->
      </Menu>
    </div>
  </div>
</template>

<script>
  import { frameInRoutes } from '@/router/routes'
  export default {
    name: 'menuTepl',
    data () {
      return {
        openName: 'home-page-index'
      }
    },
    watch: {
      $route: {
        handler (val) {
          this.handleUpdateMenuState(val)
        },
        immediate: true
      }
    },
    computed: {
      menuList () {
        return frameInRoutes[0].children
      }
    },
    mounted () {},
    methods: {
      handleUpdateMenuState (val) {
        const { name } = val
        this.openName = name
      },
      handleOpen (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/.ivu-menu-horizontal .ivu-menu-item,
/deep/.ivu-menu-horizontal .ivu-menu-submenu {
  padding: 0px 10px;
  margin: 0px 15px;
}
</style>
