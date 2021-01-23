<template>
  <div>
    <Row :gutter="20">
      <Col
        :span="8"
        v-for="(row, index) in commodities"
        :key="index"
        style="margin-top:20px;"
      >
        <div>
          {{ row.columnName }}
        </div>
        <slot :row="row.children"></slot>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    components: {},
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
      console.log(this.commodities, 'this.commodities')
    },
    methods: {
      onCommodityClick () {}
    }
  }
</script>

<style lang="less" scoped></style>
