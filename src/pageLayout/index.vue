<template>
  <section class="container_warp">
    <HeaderCont />
    <NavMain />
    <div class="container_content">
      <router-view></router-view>
    </div>
    <!-- 返回顶部 -->
    <BackTop/>
    <!-- 底部版权 -->
    <CopyRight />
  </section>
</template>

<script>
  export default {
    name: 'PageLayout',
    components: {
      HeaderCont: () => import('./header-cont'),
      NavMain: () => import('./nav-main'),
      CopyRight: () => import('@/components/copyright'),
      BackTop: () => import('@/components/backtop')
    }
  }
</script>

<style lang="less" scoped></style>
