<template>
  <div>
    <Row :gutter="20">
      <Col :span="12" v-for="(column, index) in columnList" :key="index">
        <Card class="box-card card-column">
          <p slot="title">{{ column.columnName }}</p>
          <commodity-list :commodities="column.commodityList">
            <template #default="{ row }">
              <!-- 这里只需要给Commodity组件传入数据，响应Commodity组件的clickCommodity事件即可。
                        事件不必携带参数，完全符合父到子的数据流向，而不会发生子组件又给父组件反向发数据的情况 -->
              <!-- <div>
                  https://www.jianshu.com/p/e10baeff888d
                {{ row.title }}
              </div> -->
              <commodity
                :modityData="row"
                @clickCommodity="onCommodityClick(row)"
              ></commodity>
            </template>
          </commodity-list>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    components: {
      CommodityList: () => import('./CommodityList'),
      commodity: () => import('./Commodity')
    },
    data () {
      return {
        columnList: [
          {
            columnName: '大标题1',
            commodityList: [
              {
                title: 'title1',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title2',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title3',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title4',
                cont: '内容内容内容内容内容内容'
              }
            ]
          },
          {
            columnName: '大标题2',
            commodityList: [
              {
                title: 'title1',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title2',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title3',
                cont: '内容内容内容内容内容内容'
              },
              {
                title: 'title4',
                cont: '内容内容内容内容内容内容'
              }
            ]
          }
        ]
      }
    },
    methods: {
      onCommodityClick (row) {
        console.log('====================================')
        console.log(row)
        console.log('====================================')
      }
    }
  }
</script>

<style lang="less" scoped></style>
