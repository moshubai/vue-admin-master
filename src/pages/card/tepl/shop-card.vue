<template>
  <div>
    <Row :gutter="20">
      <Col :span="12" v-for="(column, index) in columnList" :key="index">
        <Card class="box-card card-column">
          <p slot="title">{{ column.columnName }}</p>
          <shop-list :commodities="column.commodityList">
            <template #default="{ row }">
              <shop-info :modityData="row" @clickCommodity="onCommodityClick" />
            </template>
          </shop-list>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    components: {
      ShopList: () => import('./shop-list'),
      ShopInfo: () => import('./shop-info')
    },
    props: {
      modityData: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        columnList: [
          {
            columnName: '大标题1',
            commodityList: [
              {
                columnName: 'ABC',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              },
              {
                columnName: 'DEF',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              },
              {
                columnName: 'GHJ',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              }
            ]
          },
          {
            columnName: '大标题2',
            commodityList: [
              {
                columnName: 'ABC',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              },
              {
                columnName: 'DEF',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              },
              {
                columnName: 'GHJ',
                children: [
                  {
                    img: '假装这是这是图片',
                    columnName: '某某商品',
                    details: '很美的东西，很赞，很好用。'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    mounted () {
      console.log(this.modityData, 'this.modityData')
    },
    methods: {
      onCommodityClick (row) {
        console.log(row)
      }
    }
  }
</script>

<style lang="less" scoped></style>
