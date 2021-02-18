<template>
  <div class="allworks">
    <div class="allworks_container">
      <ul class="list">
        <li>
          <div class="left">
            作品频道：
          </div>
          <div class="right">
            <span class="active">男频</span>
            <span>女频</span>
          </div>
        </li>
        <li>
          <div class="left">
            作品分类：
          </div>
          <div class="right">
            <span class="active">不限</span>
            <span>玄幻奇幻</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span>
          </div>
        </li>
        <li>
          <div class="left">
            作品频道：
          </div>
          <div class="right">
            <span class="active">不限</span>
            <span>女频</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span>
          </div>
        </li>
        <li>
          <div class="left">
            作品频道：
          </div>
          <div class="right">
            <span class="active">不限</span>
            <span>女频</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span>
          </div>
        </li>
        <li>
          <div class="left">
            作品频道：
          </div>
          <div class="right">
            <span class="active">不限</span>
            <span>女频</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span><span>玄幻奇幻</span><span>玄幻奇幻</span
            ><span>玄幻奇幻</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="allworks_table">
      <Table stripe :columns="columns" :data="dataList"></Table>
      <Pagecompl
        :pageTotal="table.pageTotal"
        :pageNum="table.pageIndex"
        :pageSize="table.pageSize"
        @onChangePage="changepage"
        @onChangeHandlePage="changePageSize"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'allworks-page',
    components: {},
    data () {
      return {
        table: {
          pageTotal: 10,
          pageSize: 10,
          pageIndex: 1
        },
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
          }
        ]
      }
    },
    methods: {
      changepage (index) {
        console.log(index)
        this.table.pageIndex = index
        // this.$nextTick(() => {
        //   this.getDataFn()
        // })
      },
      changePageSize (value) {
        this.table.pageSize = value
        // this.$nextTick(() => {
        //   this.getDataFn()
        // })
      }
    },
    mounted () {}
  }
</script>

<style lang="less" scoped>
.allworks {
  width: 100%;
  &_container {
    width: 100%;
    padding: 20px 15px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    border-radius: 6px;
    .list {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        padding: 0 0 24px;
        &:last-child {
          padding: 0;
        }
        .left {
          width: 90px;
          color: #999;
        }
        .right {
          flex: 1;
          span {
            color: #333;
            padding: 0px 10px;
            &.active {
              color: #f70;
            }
          }
        }
      }
    }
  }
  &_table {
    margin-top: 15px;
    width: 100%;
    padding: 20px 15px;
    background: #fff;
    border-radius: 6px;
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
