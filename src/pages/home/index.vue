<template>
  <div class="home_content">
    <div class="swipe_container">
      <CarouselTepl />
      <RightAside :swipeAside="swipeAside" />
    </div>
    <div class="article_container">
      <ArticleCont />
      <RightAside :swipeAside="articleAside" />
    </div>
    <div class="article_container">
      <ArticleCont />
      <RightAside :swipeAside="articleAsideTwo" />
    </div>
    <div class="table_container">
      <TableCont />
      <RightAside :swipeAside="TableAside" />
    </div>
  </div>
</template>

<script>
  import absie from '@/assets/images/base/absie.jpg'
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
        swipeAside: [
          {
            id: 1,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: true
          },
          {
            id: 2,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 3,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 4,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 5,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          }
        ],
        articleAside: [
          {
            id: 1,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: true
          },
          {
            id: 2,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 3,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 4,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 5,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 6,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 7,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 8,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 9,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 10,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          }
        ],
        articleAsideTwo: [
          {
            id: 1,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: true
          },
          {
            id: 2,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 3,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 4,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 5,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 6,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 7,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 8,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 9,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 10,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          }
        ],
        TableAside: [
          {
            id: 1,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: true
          },
          {
            id: 2,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 3,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 4,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 5,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 6,
            title: '标题1',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 7,
            title: '标题2',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 8,
            title: '标题3',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 9,
            title: '标题4',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          },
          {
            id: 10,
            title: '标题5',
            content: '详情1详情1详情1详情1详情1详情1',
            img: absie,
            show: false
          }
        ]
      }
    },
    computed: {},
    methods: {}
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
