<template>
  <div class="allworks">
    <FilterList :isFromSearch="isFromSearch" @filter-search='filterSearchFn' v-if="ifShow" />
    <div class="allworks_table">
      <Table stripe :columns="columns" :data="dataList"  @on-row-click="tableRowClick"></Table>
      <Pagecompl
        :pageTotal="table.pageTotal"
        :pageNum="table.pageIndex"
        :pageSize="table.pageSize"
        @onChangePage="changepage"
        @onChangeHandlePage="changePageSize"
      />
    </div>
    <Loadcompl :isShow="isShow" />
  </div>
</template>

<script>
  // import EventBus from '@/components/EventBus'
  import Api from '@/api'
  export default {
    name: 'allworks-page',
    components: {
      FilterList: () => import('./tepl/filter-list')
    },
    data () {
      return {
        isFromSearch: false,
        ifShow: true,
        isShow: false,
        table: {
          pageTotal: 10,
          pageSize: 20,
          pageIndex: 1
        },
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
        dataList: []
      }
    },
    methods: {
      filterSearchFn (params) {
        Object.assign(this.table, params)
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
        });
      },
      changepage (index) {
        console.log(index)
        this.table.pageIndex = index
        this.$nextTick(() => {
          this.getInitData()
        })
      },
      changePageSize (value) {
        this.table.pageSize = value
        this.$nextTick(() => {
          this.getInitData()
        })
      },
      getInitData () {
        let _this = this
        _this.isShow = true
        Api.allworksList(this.table)
          .then(res => {
            _this.dataList = res
            _this.isShow = false
          })
          .catch(e => {
            console.log('e', e) // log
            _this.isShow = false
          })
      },
      handleQueryState (route) {
        console.log('route', route); // log
        const { query } = route
        this.ifShow = false
        let flag = Reflect.has(query, 'v');
        if (flag) {
          this.isFromSearch = true
        } else {
          this.isFromSearch = false
        }
        this.$nextTick(() => {
          this.ifShow = true
        })
      }
    },
    watch: {
      $route: {
        handler (val) {
          this.handleQueryState(val)
        },
        immediate: true
      }
    },
    mounted () {
      this.getInitData()
      // 路由监听，可以不需要
      // EventBus.$on('event-search-btn', query => {
      //   // 搜索启用
      //   this.ifShow = false
      //   const { v } = query
      //   console.log('vvvvvv', v); // log
      //   if (v === '' || v === null || v === undefined) {
      //     this.isFromSearch = false
      //   } else {
      //     this.isFromSearch = true
      //   }
      //   this.$nextTick(() => {
      //     this.ifShow = true
      //   })
      // })
    }
  }
</script>

<style lang="less" scoped>
.allworks {
  width: 100%;

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
