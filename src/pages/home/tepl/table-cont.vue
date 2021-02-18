<template>
  <div class="article_cont">
    <h5>最新更新</h5>
    <Table :columns="columns" :data="dataList"></Table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '类别',
            key: 'name',
            width: 100
          },
          {
            title: '书名',
            key: 'age',
            width: 150
          },
          {
            title: '最新章节',
            key: 'address',
            ellipsis: true
          },
          {
            title: '作者',
            key: 'author',
            width: 110
          },
          {
            title: '更新时间',
            key: 'date',
            width: 100
          }
        ],
        dataList: [
          {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }, {
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }

        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.article_cont {
  width: 720px;
  overflow: hidden;
  h5 {
    width: inherit;
    line-height: 1;
    padding-bottom: 15px;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid #e0e0e0;
  }
}
/deep/.ivu-table-cell {
  padding-left: 0px;
  padding-right: 0px;
}
/deep/.ivu-table th{
    background-color: transparent;
}
</style>
