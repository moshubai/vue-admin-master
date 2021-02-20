<template>
  <div class="leaderboard">
    <div class="leaderboard_left">
      <h5>热门推荐</h5>
      <Table
        stripe
        :columns="columns"
        :data="dataList"
        @on-row-click="tableRowClick"
      ></Table>
    </div>

    <div class="leaderboard_right">
      <dl>
        <dt>热门推荐</dt>
        <dd
          v-for="(item, i) in commList"
          :key="i"
          :class="{ active: item.active }"
          @click="commItemFn(item)"
        >
          {{ item.title }}
        </dd>
      </dl>
    </div>
    <Loadcompl :isShow="isShow" />
  </div>
</template>

<script>
  import Api from '@/api'
  export default {
    name: 'leaderboard-page',
    components: {},
    data () {
      return {
        isShow: false,
        columns: [
          {
            key: 'id',
            width: 50,
            align: 'center',
            title: '序号',
            render: (h, params) => {
              const bgc = +params.row.id > 5 ? '#999' : '#fc7403'
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
                params.row.id
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
        dataList: [],
        commList: [
          {
            title: '热门榜',
            id: 1,
            type: 1,
            active: true
          },
          {
            title: '点击榜',
            id: 2,
            type: 2,
            active: false
          },
          {
            title: '点击榜',
            id: 3,
            type: 3,
            active: false
          },
          {
            title: '点击榜',
            id: 4,
            type: 4,
            active: false
          }
        ]
      }
    },
    methods: {
      commItemFn (item) {
        this.commList.map(v => {
          v.active = false
          if (v.id === item.id) {
            v.active = true
          }
        })
        this.$nextTick(() => {
          this.getInitData()
        })
      },
      tableRowClick (row) {
        const { id, category } = row
        let query = {
          id,
          v: category
        }
        this.$router.push({
          path: `/details/${id}`,
          query
        })
      },
      getInitData () {
        let _this = this
        _this.isShow = true
        Api.leaderboardApi()
          .then(res => {
            _this.dataList = res
            _this.isShow = false
          })
          .catch(e => {
            console.log('e', e) // log
            _this.isShow = false
          })
      }
    },
    mounted () {
      this.getInitData()
    }
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
        &:last-child {
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
