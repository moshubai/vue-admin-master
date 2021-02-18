<template>
  <div class="pagination_page">
    <Row>
      <Col span="8">
        <span v-if="!minpage" class="page_text"
          >共{{ pageTotal }}条记录 第{{ pageNum }}/{{
            Math.ceil(pageTotal / pageSize)
          }}页</span
        >
      </Col>
      <Col :span="`${minpage ? '24' : '16'}`" style="text-align: right;">
        <Page
          size="small"
          :total="pageTotal"
          :current="pageNums"
          :page-size="pageSizes"
          :show-elevator="!minpage"
          :show-sizer="!minpage"
          placement="top"
          @on-change="handlePage"
          @on-page-size-change="handlePageSize"
        ></Page>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    nam: 'Pagecompl',
    props: {
      // 是否是min型的
      minpage: {
        type: Boolean,
        default: false
      },

      pageTotal: {
        type: Number,
        default: 100
      },
      pageNum: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 2
      }
    },
    data () {
      return {
        pageNums: this.pageNum,
        pageSizes: this.pageSize
      }
    },
    computed: {
      grants_: {
        get () {
          return this.grants
        },
        set (val) {
          this.$emit('on-change-grant', val)
        }
      }
    },
    watch: {},
    methods: {
      handlePage (value) {
        this.$emit('onChangePage', value)
      },
      handlePageSize (value) {
        this.$emit('onChangeHandlePage', value)
      }
    }
  // created () {},
  // mounted () {},
  // beforeCreate () {}, // 生命周期 - 创建之前
  // beforeMount () {}, // 生命周期 - 挂载之前
  // beforeUpdate () {}, // 生命周期 - 更新之前
  // updated () {}, // 生命周期 - 更新之后
  // beforeDestroy () {}, // 生命周期 - 销毁之前
  // destroyed () {}, // 生命周期 - 销毁完成
  // activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang="less" scoped>
.pagination_page {
  width: 100%;
  padding: 20px 0 0 0;
  display: inline-block;
  .page_text {
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 32px;
  }
  /deep/.ivu-page-options-elevator {
    color: #666666;
  }
  /deep/.ivu-page-item-active {
    border-color: #f80;
    background-color: #f80;
    a {
      color: #ffffff;
    }
  }
  /deep/.ivu-page-item:hover {
    border-color: #f80;
    background-color: #f80;
    a {
      color: #ffffff;
    }
  }
  /deep/.ivu-page-next:hover,
  .ivu-page-prev:hover {
    border-color: #f80;
    background-color: #f80;
    a {
      color: #ffffff;
    }
  }
  /deep/.ivu-select {
    color: #000;
  }
  /deep/.ivu-select-dropdown {
    border: 0px solid #4093f5;
  }
  /deep/.ivu-select-item {
    color: #666;
    &:hover {
      background: rgba(226, 239, 255, 0.88);
    }
  }
  span {
    display: inline-block;
    width: auto;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
    margin-right: 10px;
  }
}
</style>
