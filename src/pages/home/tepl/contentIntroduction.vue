<template>
  <Row :gutter="20">
    <Col :span="12">
      <div class="icon_svg">
        <svg-icon icon-class="computer "></svg-icon>
      </div>
    </Col>
    <Col :span="12">
      <div class="content">
        <h3>简单易用的模板系统</h3>
        <dl class="mt-10">
          <dt>优点：</dt>
          <dd>1.自适应屏幕大小，改变布局和文字的大小</dd>
          <dd>2.可以自定义ICON</dd>
          <dd>3.易配置</dd>
        </dl>
      </div>
    </Col>
  </Row>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
.icon_svg {
  width: 100%;
  .svg-icon {
    font-size: 20rem;
    width: 100%;

  }
}
</style>
