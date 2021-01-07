<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    
  >
    <router-link to="/">
      <el-menu-item  index="1">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">地图</span>
    </el-menu-item>
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
      <!-- <el-submenu index="5-4">
        <template slot="title">选项4</template>
        <el-menu-item index="5-4-1">选项1</el-menu-item>
      </el-submenu> -->
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped></style>
