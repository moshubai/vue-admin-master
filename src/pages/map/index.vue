<template>
  <div class="map_section">
    <div class="map_box" id="mapbox"></div>
  </div>
</template>

<script>
// import { LoadBaiduMapScript } from "@/mixins/mapoptions";
// import throttle from '@/components/util';
  export default {
    name: 'Map-index',
    // mixins: [LoadBaiduMapScript],
    data () {
      return {
        searchText: '', // 搜索
        needOjb: {}, // 总数、正常、离线、告警
        allDataList: [], // 所有数组
        allKguanzArrList: [], // 所有开关站
        supplyCompany: [], // 供电公司
        banzhusList: [], // 班组
        onpendzList: [], // 开关站
        selectPrShowIndex: null,
        haveChoose: [{}, {}, {}],
        tabStatus: '',
        kgzActiveChoose: '',
        mapAddressIcon: () => import('@/assets/map/map-adress.png'),
        mapAddressIcon2: () => import('@/assets/map/dizhi-17.png'),
        mapAddressIcon3: () => import('@/assets/map/dizhi-172.png'),
        mapAddressIcon4: () => import('@/assets/map/dizhi-171.png'),
        isLoading: true,
        isFlag: false, // 强制解决addEventListener执行两次
        tabIndex: 0,
        logFlag: 'normal',
        devEmlData: [],
        basicData: {},
        poxl: {},
        modalContInfo: [],
        modelInfoShow: false,
        page: 1,
        isShowCompy: null,
        contShoe: null
      }
    },
    created () {
      console.log(typeof BMap, '5555')
      this.selectPrShowIndex = null
    // await this.getAllDataFn(0, "");
    // await this.getDataFun();
    },
    mounted () {
      this.initCreatedBmap()
    },
    methods: {
      initCreatedBmap (long = '121.35591', lat = '31.26927', zoomIndex = 11) {
        let that = this
        // enableMapClick:Boolean 是否开启底图可点功能，默认启用
        let map = new BMap.Map('mapbox', {
          minZoom: 10,
          maxZoom: 18,
          enableMapClick: false
        })
        let point = new BMap.Point(long, lat)
        map.centerAndZoom(point, zoomIndex)
        map.enableScrollWheelZoom(true)
        that.initAddMarker()
      // that.bmapZoom();
      },
      initAddMarker () {
        const arraytoM = (arr, num) => {
          let count =
            arr.length % num === 0
              ? parseInt(arr.length / num)
              : parseInt(arr.length / num) + 1
          let itemArr = []
          for (let i = 0; i < count; i++) {
            let nArr = []
            for (let j = 0; j < num; j++) {
              if (arr.length === 1) {
                nArr.push(arr.shift())
                itemArr.push(nArr)
                return itemArr
              }
              nArr.push(arr.shift())
            }
            itemArr.push(nArr)
          }
          return itemArr
        }

        // const arraytoM = (arr, num) => {
        //   let count =
        //     arr % num === 0
        //       ? parseInt(arr.length / num)
        //       : parseInt(arr.length / num) + 1
        //   let newArr = []
        //   for (let i = 0; i < count; i++) {
        //     let tempArr = []
        //     for (let j = 0; j < num; j++) {
        //       if (arr.length === 1) {
        //         tempArr.push(arr.shift())
        //         newArr.push(tempArr)
        //         return newArr
        //       }
        //       tempArr.push(arr.shift())
        //     }
        //     newArr.push(tempArr)
        //   }
        //   return newArr
        // }

        let andr = arraytoM([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
        console.log('====================================')
        console.log(andr)
        console.log('====================================')
      }
    }
  }
</script>

<style lang="less" scoped>
.map_section {
  height: 100%;
  .map_box {
    width: inherit;
    height: inherit;
  }
}
/* 隐藏地图的baidulogo */
/deep/.anchorBL {
  display: none;
}
</style>
