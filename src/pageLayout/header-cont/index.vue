<template>
  <div class="header_warp">
    <div class="header">
      <Row :gutter="0">
        <Col :span="6">
          <span class="logo">
            <img src="~@/assets/images/base/logo.png" alt="*******" />
          </span>
          <!--  -->
        </Col>
        <Col :span="15">
          <div class="searchBar">
            <Input
              search
              enter-button
              @on-search="searchFn"
              placeholder="搜索..."
            />
          </div>
        </Col>
        <Col :span="3">
          <div class="bookBar">
            <span>
              <div class="icon_svg">
                <svg-icon icon-class="book"></svg-icon>
                <span class="ml-8">我的书架</span>
              </div>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {},
    mounted () {},
    methods: {
      searchFn (val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="less" scoped></style>
