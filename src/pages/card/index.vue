<template>
  <div class="card_content">
    <shop-card />
  </div>
</template>

<script>
  export default {
    name: 'card-page-index',
    components: {
      ShopCard: () => import('./tepl/shop-card')
    },
    data () {
      return {
        count: 0
      }
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="less" scoped>
.card_content {
  width: 100%;
}
</style>
