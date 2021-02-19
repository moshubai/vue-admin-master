<template>
  <div class="details">
    <Breadcrumb>
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">武侠仙侠</BreadcrumbItem>
      <BreadcrumbItem>详情</BreadcrumbItem>
    </Breadcrumb>
    <!--  -->
    <DetailsCont />
    <!--  -->
    <DetailsArticle/>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'details-page',
    components: {
      DetailsCont: () => import('./tepl/details-cont'),
      DetailsArticle: () => import('./tepl/details-article.vue')
    },
    data () {
      return {}
    },
    methods: {
      ...mapActions('account', ['login']),
      submitForm () {
        this.login({
          username: 123,
          password: 10000
        }).then(res => {
          this.$router.replace({
            path: '/home'
          })
        })
      }
    },
    mounted () {
      console.log('store', this.$store) // log
    }
  }
</script>

<style lang="less" scoped>
.details {
  width: 100%;
  //   display: flex;
  //   display: -webkit-flex;
}
</style>
