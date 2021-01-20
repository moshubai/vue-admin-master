<template>
  <Menu
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
      <Icon type="md-document" />
      {{ item.meta.title }}
    </MenuItem>
  </Menu>
</template>

<script>
  import { frameInRoutes } from '@/router/routes'
  export default {
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
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less" scoped>
.ivu-menu-vertical.ivu-menu-light:after {
  background: transparent;
}
</style>
