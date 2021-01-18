## vue 和 百度地图，创建自定义图标和自定义提示窗

## 引入百度地图API于 public/index.html 中，API如下：
```
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=您的密钥">
```
> 若没有账号（也就是没有秘钥）可以自行申请[☞方法点击此处](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/helloworld) 

## 验证，map是否已经加载成功：
```
console.log(BMap)
<!-- 控制台出现如下，则成功 -->

```
## 正题=》

### 1.首先创建地图，即为可视化。
```
<!-- html -->
<div class="map_box" id="mapbox"></div>

<!-- vue -->
let map = new BMap.Map('id', {
    minZoom: 10,
    maxZoom: 18,
    enableMapClick: false  // 此属是否开启底图可点功能，默认启用
})
let point = new BMap.Point(long, lat)
map.centerAndZoom(point, zoomIndex)
map.enableScrollWheelZoom(true)
<!-- map.setMapStyleV2({ styleJson: styleJson }); -->
```
> 属性说明：
 >> - minZoom   缩放最小
 >> - maxZoom   缩放最大
 >> - enableMapClick   地图底图是否可以点击，false的作用主要是去除点击底图弹出各种信息。
 >> - centerAndZoom    地图中心点
 >> - enableScrollWheelZoom    是否支持鼠标滚轮放大缩小
 >> - setMapStyleV2    自定义地图样式[☞点击这里自行配置](http://lbsyun.baidu.com/apiconsole/custommap)

### 2.第一步完成后，地图基本已经呈现，且无需过多复杂配置；接下来配置图标(Icon)。
#### 官网示例：[☞Icon](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/mark)
#### 官网API：[☞API](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_reference_3_0.html#a3b5)

```
# 我们可以根据不同的需求配置不同的图标，只要配好图标的Size和位置。
let bigSize = new BMap.Size(70, 70)
let icon1 = new BMap.Icon('图片的地址', bigSize)
let marker = new window.BMap.Marker(point, { icon: icon1 })
# 配置好图标再配置图标上的文字(Label)
let optsion = {
    point: 点的位置,
    offset: 偏移的位置,
    enableMassClear: true
}
let label = new window.BMap.Label('地点1', optsion)
marker.setLabel(label) // 放到这个点上

# 设置label文字的样式，并添加背景图
label.setStyle({
    width: '100px',
    height: '40px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '15px',
    border: '0px',
    borderRadius: '5px',
    background: `url(背景图地址)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
})
# 最后 放在地图上
map.addOverlay(marker)

# 可以在这个点设置 click 方法，
# 可以下钻，也可以显示信息，这个自由配置。
// that.addClickInfo(marker, item)

```
> 配置好，即如下：


### 3.配置自定义弹窗，并配置文案和样式
#### 官网示例：[☞InfoWindow](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/infowindow)
#### 官网API：[☞API](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_reference_3_0.html#a3b7)

```
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
```

> 配置好，即如下：


### 4.上面设置了地图支持滚轮缩放，故而可以做简单的优化，支持缩放显示不同层级的信息。

```
# throttle()节流函数
# 获取不同层级，然后调用不同的方法，传递不同的数组参数。
map.addEventListener('zoomend', async e => {
    let zoomLevel = map.getZoom()
    if (zoomLevel < 15) {
    map.clearOverlays() // 清除地图上所有覆盖物
    throttle(that.initAddMarker([]), 1000)
    } else {
    map.clearOverlays() // 清除地图上所有覆盖物
    throttle(that.initAddMarker([]), 1000)
    }
})
```

### 5.以上配置完成，自定义图标和弹窗信息，基本完成，其中最重要的是：
```
# 将地图缓存
window.map = map
```
### 6.最后再卸载(destroyed)的时候清空即可。

注：次文的源码[☞在这里](https://github.com/moshubai/vue-admin-master)，如果觉得不错，请给个Start。

码字不易，谢谢阅读。







