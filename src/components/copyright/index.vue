<template>
  <div class="copyright">
    <ul>
      <li class="menu">
        <a>手机站</a><i class="line">|</i> <a>网站首页</a><i class="line">|</i>
        <a>关于我们</a><i class="line">|</i> <a>联系我们</a
        ><i class="line">|</i> <a>反馈留言</a><i class="line">|</i>
        <a>作家专区</a><i class="line">|</i>
        <a>客户端</a>
      </li>
      <li>
        Copyright (C) xiongxyang.gitee.io All rights
        reserved&nbsp;&nbsp;小说精品屋版权所有
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'copyright',
    data () {
      return {
        links: [
          {
            key: '帮助',
            title: '帮助',
            href: 'https://www.iviewui.com',
            blankTarget: true
          },
          {
            key: 'github',
            icon: 'logo-github',
            href: 'https://github.com/iview/iview',
            blankTarget: true
          },
          {
            key: '条款',
            title: '条款',
            href: '',
            blankTarget: true
          }
        ],
        copyright:
          '国网上海市电力有限公司版权所有 Copyright © 2018 State Grid Corporation of China,All Rights Reserved'
      }
    }
  }
</script>
<style lang="less">
.copyright {
  width: 100%;
  ul {
    margin: 20px auto;
    width: 100%;
    text-align: center;
    li {
      padding: 2px 0 6px;
      color: #999;
      line-height: 26px;
      font-size: 12px;
      a {
        color: #666;
        text-decoration: underline;
      }
      .line {
        display: inline-block;
        padding: 0 12px;
        color: #e5d9da;
      }
    }
  }
}
</style>
