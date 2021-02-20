<template>
  <div class="article_cont">
    <h5>{{ title }}</h5>
    <Table :columns="columns" :data="dataList" @on-row-click="tableRowClick"></Table>
  </div>
</template>

<script>
  import Api from '@/api'
  export default {
    props: {
      title: {
        type: String,
        default: '最新更新'
      }
    },
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
        dataList: []
      }
    },
    computed: {},
    methods: {
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
      getInitData () {
        let _this = this
        Api.getHomeLatestUpdatelList()
          .then(res => {
            _this.dataList = res
          })
          .catch(e => {
            console.log('e', e) // log
          })
      }
    },
    mounted () {
      this.getInitData()
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
/deep/.ivu-table th {
  background-color: transparent;
}
</style>
