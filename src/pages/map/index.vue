<template>
  <div class="map_section">
    <div class="map_box" id="mapbox"></div>
  </div>
</template>

<script>
  import util from '@/libs/util' // 节流
  import Api from '@/api/index'
  import mapAddressIcon from '@/assets/map/map-adress.png'
  import mapAddressIcon2 from '@/assets/map/dizhi-17.png'
  import mapAddressIcon3 from '@/assets/map/dizhi-172.png'
  import mapAddressIcon4 from '@/assets/map/dizhi-171.png'
  import fontBg from '@/assets/map/label2.png'
  import styleJson from './styleJson';
  import Vue from 'vue'
  window.map = null
  export default {
    name: 'Map-index',
    // mixins: [LoadBaiduMapScript],
    data () {
      return {
        allDataList: [], // 所有数组
        mapAddressIcon: mapAddressIcon,
        mapAddressIcon2: mapAddressIcon2,
        mapAddressIcon3: mapAddressIcon3,
        mapAddressIcon4: mapAddressIcon4
      }
    },
    created () {},
    mounted () {
      this.getDataFn()
    },
    methods: {
      getDataFn () {
        Api.mapListArr().then(async res => {
          this.allDataList = res
          await this.initCreatedBmap()
          await this.initAddMarker()
          await this.bmapZoom()
        })
      },

      initCreatedBmap (long = '121.35591', lat = '31.26927', zoomIndex = 11) {
        // enableMapClick:Boolean 是否开启底图可点功能，默认启用
        let map = new BMap.Map('mapbox', {
          minZoom: 10,
          maxZoom: 18,
          enableMapClick: false
        })
        let point = new BMap.Point(long, lat)
        map.centerAndZoom(point, zoomIndex)
        map.enableScrollWheelZoom(true)
        map.setMapStyleV2({ styleJson: styleJson });
        window.map = map
      },
      initAddMarker (arr) {
        let that = this
        let dataArr = arr || that.allDataList
        let bigSize = new BMap.Size(70, 70)
        let minSize = new BMap.Size(42, 41)
        let bigKgzOffset = new BMap.Size(-15, -35)
        let minKgzOffset = new BMap.Size(-30, -30)
        let icon1 = new BMap.Icon(that.mapAddressIcon, bigSize)
        let icon2 = null
        // let mapList = getListFn(1)
        dataArr.map(item => {
          switch (item.state) {
          case 'normal':
            icon2 = new BMap.Icon(that.mapAddressIcon2, minSize)
            break
          case 'offline':
            icon2 = new BMap.Icon(that.mapAddressIcon3, minSize)
            break

          default:
            icon2 = new BMap.Icon(that.mapAddressIcon4, minSize)
            break
          }
          let mapIcon = item.nodeType === 1 ? icon1 : icon2
          mapIcon.setImageSize(item.nodeType === 1 ? bigSize : minSize) // 背景图 大小

          let point = new window.BMap.Point(item.longitude, item.latitude)
          let labelContent = `${item.nodeType === 1 ? item.dwmc : item.name}`
          let optsion = {
            point: point,
            offset: item.nodeType === 1 ? bigKgzOffset : minKgzOffset,
            enableMassClear: true
          }
          let marker = new window.BMap.Marker(point, { icon: mapIcon })
          let label = new window.BMap.Label(labelContent, optsion)
          // marker.setIcon(mapIcon)
          marker.setLabel(label)
          label.setStyle({
            // 设置label的样式
            width: '100px',
            height: '40px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#ffffff',
            fontSize: '15px',
            border: '0px',
            borderRadius: '5px',
            background: `url(${fontBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          })
          map.addOverlay(marker)
          that.addClickInfo(marker, item)
        })
      },
      addClickInfo (marker, item) {
        let that = this
        marker.addEventListener('click', async e => {
          let dwmc = e.target.getLabel().content
          if (item.nodeType === 1) {
            // 此处是下钻
            await that.getBanzAllListFn(dwmc, item)
          } else {
            await that.getDetailsFn(e, item)
          }
        })
      },
      bmapZoom () {
        let that = this
        const getChildList = arr => {
          let nArr = []
          arr.forEach(element => {
            if (Array.isArray(element.children) && element.children.length > 0) {
              nArr.push(...element.children)
            }
          })
          return nArr
        }
        map.addEventListener('zoomend', async e => {
          let zoomLevel = map.getZoom()
          if (zoomLevel < 15) {
            map.clearOverlays() // 清除地图上所有覆盖物
            util.throttle(that.initAddMarker(that.allDataList), 1000)
          } else {
            map.clearOverlays()
            let newChild = getChildList(that.allDataList)
            util.throttle(that.initAddMarker(newChild), 1000)
          }
        })
      },
      getBanzAllListFn (dwmc, item) {
        let arr = this.allDataList.find(v => v.dwmc === dwmc)
        map.clearOverlays()
        const { longitude, latitude } = arr.children[0]
        this.initCreatedBmap(longitude, latitude, 15)
        this.initAddMarker(arr.children)
      },
      getDetailsFn (e, item) {
        let optsion = {
          width: 390, // 信息窗口宽度
          height: 0, // 信息窗口高度
          title: `温馨提示(自定义)`, // 信息窗口标题
          enableMessage: true // 设置允许信息窗发送短息
        }
        var p = e.target
        var point = new window.BMap.Point(
          p.getPosition().lng,
          p.getPosition().lat
        )

        let MyComponent = Vue.extend({
          template:
            `<div class="mapgrayInfo" ><div class="title">{{item.name}}</div>` +
            `<div class="content"><h5>状态：<span>正常</span></h5>` +
            `<p>详情：这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情这是详情</p>` +
            `</div></div>`,
          data () {
            return {
              item: item
            }
          },
          mounted () {},
          computed: {},
          methods: {}
        })

        let component = new MyComponent().$mount()
        var infoWindow = new window.BMap.InfoWindow(component.$el, optsion) // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
      }
    },
    destroyed () {
      window.map = null
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
/deep/.mapgrayInfo {
  width: 100%;
  padding-top: 10px;
  box-sizing: border-box;
  padding-bottom: 10px;
  .title {
    width: inherit;
    background: #f8f8f8;
    border-radius: 2px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    line-height: 40px;
    box-sizing: border-box;
    margin-bottom: 8px;
    text-align: center;
  }
  .content {
    h5 {
      width: 100%;
      line-height: 20px;
      padding: 6px 0;
      box-sizing: border-box;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;

    }
  }
}
/* 隐藏地图的baidulogo */
/deep/.anchorBL {
  display: none;
}
</style>
