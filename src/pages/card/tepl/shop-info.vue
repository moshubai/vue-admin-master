<template>
  <ul>
    <li
      v-for="(row, index) in modityData"
      :key="index"
      style="margin-top:20px;"
      @click="shopDetailsFn(row)"
    >
      <h5>{{ row.columnName }}</h5>
      <p>{{ row.img }}</p>
      <p>{{ row.details }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      modityData: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {}
    },
    mounted () {
      console.log(this.modityData, 'this.modityData///')
    },
    methods: {
      onCommodityClick () {},
      shopDetailsFn (row) {
        this.$emit('clickCommodity', row)
      }
    }
  }
</script>

<style lang="less" scoped></style>
