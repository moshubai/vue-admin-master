<template>
  <span>
    <svg-icon v-if="iconInfo.svgIcon" :icon-class="iconInfo.svgIcon"></svg-icon>
    <Icon v-if="iconInfo.icon" :type="iconInfo.icon" />
  </span>
</template>

<script>
  export default {
    props: {
      iconInfo: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="less" scoped></style>
