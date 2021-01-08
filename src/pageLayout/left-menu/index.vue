<template>
  <el-menu
    :default-active="openName"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <router-link :to="item.path" v-for="(item,i) in menuList" :key="i">
      <el-menu-item :index="item.name">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </router-link>
    <!-- <router-link to="/map">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">地图</span>
      </el-menu-item>
    </router-link>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">图表</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">设置</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>其他</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
  </el-menu>
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

<style lang="less" scoped></style>
