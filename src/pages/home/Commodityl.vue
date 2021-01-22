<template>
  <div>
    <Row :gutter="20">
      <Col
        :span="8"
        v-for="(row, index) in commodities"
        :key="index"
        style="margin-top:20px;"
      >
        <slot :row="row"></slot>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: {
      commodities: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {}
    },
    mounted () {
      console.log(this.commodities)
    },
    methods: {
      onCommodityClick () {}
    }
  }
</script>

<style lang="less" scoped></style>
