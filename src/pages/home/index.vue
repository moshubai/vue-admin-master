<template>
  <div class="home_content">
    <div class="swipe_container">
      <CarouselTepl />
      <RightAside :swipeAside="swipeAside.swipeAside"  title="本周强推"/>
    </div>
    <div class="article_container">
      <ArticleCont title="精品推荐" :recommendList='boutiquelRecommendList'/>
      <RightAside :swipeAside="swipeAside.articleAside"  title="热门推荐"/>
    </div>
    <div class="article_container">
      <ArticleCont title="热门推荐" :recommendList='hotlRecommendList'/>
      <RightAside :swipeAside="swipeAside.articleAsideTwo"  title="热门推荐"/>
    </div>
    <div class="table_container">
      <TableCont title="最新更新"/>
      <RightAside :swipeAside="swipeAside.TableAside" title="热门推荐" />
    </div>
    <Loadcompl :isShow="isShow" />
  </div>
</template>

<script>
  import Api from '@/api'
  export default {
    name: 'home-page-index',
    components: {
      CarouselTepl: () => import('./tepl/carousel'),
      RightAside: () => import('./tepl/right-aside'),
      ArticleCont: () => import('./tepl/article-cont'),
      TableCont: () => import('./tepl/table-cont')
    },
    data () {
      return {
        isShow: false,
        swipeAside: {
          swipeAside: [],
          articleAside: [],
          articleAsideTwo: [],
          TableAside: []
        },
        boutiquelRecommendList: [],
        hotlRecommendList: []
      }
    },
    computed: {},
    methods: {
      async getInitData () {
        let _this = this
        _this.isShow = true
        await Api.getHomeAsideList()
          .then(res => {
            console.log('res', res) // log
            _this.swipeAside = res
          })
          .catch(e => {
            console.log('e', e) // log
          })

        await Api.getHomeBoutiquelRecommendList()
          .then(res => {
            console.log('res', res) // log
            _this.boutiquelRecommendList = res
          })
          .catch(e => {
            console.log('e', e) // log
          })
        await Api.getHomeHotRecommendList()
          .then(res => {
            console.log('res', res) // log
            _this.hotlRecommendList = res
          })
          .catch(e => {
            console.log('e', e) // log
          })
        _this.isShow = false
      }
    },
    mounted () {
      this.getInitData()
    }
  }
</script>
<style lang="less" scoped>
.home_content {
  width: 100%;
  .swipe_container {
    width: 100%;
    padding: 15px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    border-radius: 6px;
  }
  .article_container,
  .table_container {
    margin-top: 15px;
    width: 100%;
    padding: 15px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    border-radius: 6px;
  }
}
</style>
