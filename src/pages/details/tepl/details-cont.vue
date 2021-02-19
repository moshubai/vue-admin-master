<template>
  <div class="details_container">
    <div class="details_container_left">
      <img :src="img" alt="" />
    </div>
    <div class="details_container_right">
      <h4>大奉打更人</h4>
      <p class="author"><span>卖报小郎君</span>著</p>
      <p class="list_p">
        <span>类别：<em>武侠仙侠</em></span>
        <span>状态：<em>连载中</em></span>
        <span>总点击：<em>391968</em></span>
        <span>总字数：<em>4748646</em></span>
      </p>
      <div
        class="cont"
        :class="`${isExpanded ? 'isexpand' : ''}`"
        ref="isExpand"
      >
        <p>这个世界，有儒；有道；有佛；有妖；有术士。</p>
        <p>
          警校毕业的许七安幽幽醒来，发现自己身处牢狱之中，三日后流放边陲,他起初的目的只是自保，顺便在这个没有人权的社会里当个富家翁悠闲度日。
        </p>
        <p>
          多年后，许七安回首前尘，身后是早已逝去的敌人和朋友，以及累累白骨。
        </p>
        <p>
          滚滚长江东逝水，浪花淘尽英雄，是非成败转头空。青山依旧在，几度夕阳红。滚滚长江东逝水，浪花淘尽英雄，是非成败转头空。青山依旧在，几度夕阳红。滚滚长江东逝水，浪花淘尽英雄，是非成败转头空。青山依旧在，几度夕阳红。
        </p>
        <span class="isexpand_btn" @click="isExpanded = !isExpanded">
          <Icon :type="isExpanded ? 'ios-arrow-up' : 'ios-arrow-down'" />{{
            isExpanded ? '收起' : '展开'
          }}
        </span>
      </div>

      <p>
        <Button type="primary" shape="circle">点击阅读</Button>
        <Button shape="circle" class="ml-15">加入书架</Button>
      </p>
    </div>
  </div>
</template>

<script>
  import absie from '@/assets/images/base/home.jpg'
  export default {
    name: 'details-cont',
    components: {},
    data () {
      return {
        img: absie,
        isExpanded: false
      }
    },
    methods: {},
    mounted () {}
  }
</script>

<style lang="less" scoped>
.details_container {
  margin-top: 15px;
  width: 100%;
  padding: 15px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  display: -webkit-flex;
  &_left {
    zoom: 1;
    width: 200px;
    display: block;
    height: 266px;
    margin-right: 25px;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3), 0 0 5px #f9f2e9 inset;
    transition: color 0.3s, background-color 0.3s, border 0.3s;
    img {
      width: 100%;
      height: 100%;
      background: #f6f6f6;
      -webkit-transition: -webkit-transform 0.3s ease-out;
      -moz-transition: -moz-transform 0.3s ease-out;
      -ms-transition: -ms-transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
      &:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }
    }
  }
  &_right {
    flex: 1;
    h4 {
      width: 100%;
      font-size: 24px;
      display: block;
      line-height: 34px;
      color: #333;
      margin-bottom: 10px;
    }
    .author {
      font-size: 14px;
      color: #444;
      line-height: 26px;
      margin-bottom: 10px;
    }
    .list_p {
      width: 100%;
      overflow: hidden;
      height: 30px;
      margin-bottom: 20px;
      span {
        display: block;
        float: left;
        margin-right: 30px;
        line-height: 30px;
        color: #8d8d8d;
        em {
          font-style: normal;
          color: #666;
        }
      }
    }
    .cont {
      position: relative;
      width: 100%;
      text-align: justify;
      height: 90px;
      min-height: 90px;
      line-height: 24px;
      font-size: 14px;
      position: relative;
      margin-bottom: 15px;
      overflow: hidden;
      -webkit-transition: height 0.3s ease-out;
      -moz-transition: height 0.3s ease-out;
      -ms-transition: height 0.3s ease-out;
      transition: height 0.3s ease-out;
      &.isexpand {
        height: 200px;
      }
      p {
        color: #333;
        width: 100%;
        text-indent: 20px;
        margin-bottom: 15px;
      }
    }
  }
  .isexpand_btn {
    cursor: pointer;
    display: inline-block;
    color: #2972cc;
    height: 24px;
    padding: 0 2px 0 10px;
    text-indent: 0;
    text-align: center;
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: #fff;
  }
}
</style>
