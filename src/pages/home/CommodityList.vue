<template>
  <div>
    <Commodityl
      v-for="(item, index) in commodities"
      :key="index"
      @clickCommodity="onCommodityClick"
    />

  </div>
</template>

<script>
  export default {
    components: {
      Commodityl: () => import('./Commodityl')
    },
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
      console.log('====================================')
      console.log(this.commodities)
      console.log('====================================')
    },
    methods: {
      onCommodityClick () {}
    }
  }
</script>

<style lang="less" scoped></style>
