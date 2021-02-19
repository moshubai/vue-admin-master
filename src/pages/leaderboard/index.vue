<template>
  <div class="leaderboard">
    <div class="leaderboard_left">
      <h5>热门推荐</h5>
      <Table stripe :columns="columns" :data="dataList" @on-row-click="tableRowClick"></Table>
    </div>

    <div class="leaderboard_right">
      <dl>
        <dt>热门推荐</dt>
        <dd class="active">热门榜</dd>
        <dd>点击榜</dd>
        <dd>点击榜</dd>
        <dd>点击榜</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leaderboard-page',
    components: {},
    data () {
      return {
        columns: [
          {
            key: 'index',
            width: 50,
            align: 'center',
            title: '序号',
            render: (h, params) => {
              const bgc = +params.row.index > 5 ? '#999' : '#fc7403'
              return h(
                'span',
                {
                  style: {
                    width: '17px',
                    height: '17px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    color: '#fff',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    fontSize: '12px',
                    background: bgc
                  }
                },
                params.row.index
              )
            }
          },
          {
            title: '类别',
            key: 'name',
            width: 100
          },
          {
            title: '书名',
            key: 'age'
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
            index: 1,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 2,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 3,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 4,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 5,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 6,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 7,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 8,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 9,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 10,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 11,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 12,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 13,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 14,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 15,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 16,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 17,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 18,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 19,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 20,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 21,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 22,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 23,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 24,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 25,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 26,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 27,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 28,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 29,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          },
          {
            index: 30,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            date: '2016-10-03'
          }
        ]
      }
    },
    methods: {
      tableRowClick (row) {
        console.log('row', row); // log
        this.$router.push(`/details/55555333`);
      }

    },
    mounted () {}
  }
</script>

<style lang="less" scoped>
.leaderboard {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  &_left {
    width: 750px;
    padding: 20px 15px;
    background: #fff;
    border-radius: 6px;
    h5 {
      width: 100%;
      line-height: 1;
      padding-bottom: 15px;
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
    }
  }
  &_right {
    margin-left: 15px;
    flex: 1;
    dl {
      background: #fff;
      padding: 20px 15px;
      dt {
        width: 100%;
        line-height: 1;
        padding-bottom: 15px;
        background: #fff;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 10px;
      }
      dd {
        color: #333;
        cursor: pointer;
        display: block;
        height: 47px;
        line-height: 47px;
        font-size: 16px;
        overflow: hidden;
        border-bottom: 1px dotted #eee;
        &:last-child{
          border-bottom: none;
        }
        &.active {
          color: #f70;
        }
      }
    }
  }
}
/deep/.ivu-table-cell {
  padding-left: 0px;
  padding-right: 0px;
}
/deep/.ivu-table td,
/deep/.ivu-table th {
  border-bottom: none;
}
</style>
