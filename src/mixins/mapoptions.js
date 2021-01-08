// 加载百度地图
const BMapURL = 'http://192.168.0.171:8725/map/map_load.js'
export const LoadBaiduMapScript = {
    beforeCreate() {
        console.log('====================================');
        console.log(typeof BMap);
        console.log('====================================');
        if (typeof BMap === 'undefined') {
            let scriptNode = document.createElement('script')
            scriptNode.setAttribute('type', 'text/javascript')
            scriptNode.setAttribute('src', BMapURL)
            document.body.appendChild(scriptNode)
            // document.head.appendChild(script);
        }
        console.log(typeof BMap);
    },
    created() {

        // 插入script脚本


    }
}