<template>
  <section class="container_warp">
    <header class="header_warp">
      <HeaderCont/>
    </header>
    <div class="container_content">
      <div class="container_left_warp">
        <LeftMenu />
      </div>
      <div class="container_right_warp">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PageLayout',
    components: {
      LeftMenu: () => import('./left-menu'),
      HeaderCont: () => import('./header-cont')
    }
  };
</script>

<style lang="less" scoped></style>
