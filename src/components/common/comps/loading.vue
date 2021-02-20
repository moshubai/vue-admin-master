<template>
  <Spin fix v-if="isShow">
    <Icon type="ios-loading" size="50" class="demo-spin-icon-load"></Icon>
    <div
      style="font-size: 16px;
    margin-top: 8px;
    letter-spacing: 2px;"
    >
      加载中...
    </div>
  </Spin>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>
