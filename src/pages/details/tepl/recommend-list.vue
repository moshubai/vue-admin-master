<template>
  <div class="recommend_list">
    <h5>同类推荐</h5>
    <ul>
      <li v-for="(item, i) in articleList" :key="i">
        <div class="img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <div class="cont">
          <h6>{{ item.title }}</h6>
          <p class="author"><span>作者：</span>{{ item.author }}</p>
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import pageh from '@/assets/images/base/pageh.jpg'
  export default {
    data () {
      return {
        articleList: [
          {
            id: 1,
            title: '标题1',
            author: '作者',
            content:
              '内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.recommend_list {
  margin-top: 15px;
  width: 100%;
  padding: 15px 15px;
  background: #fff;
  border-radius: 6px;
  h5 {
    width: inherit;
    line-height: 1;
    padding-bottom: 15px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #e9e9e9;
  }
  ul {
    width: 100%;
    overflow: hidden;
    margin-top: 15px;
    li {
      cursor: pointer;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
      .img {
        width: 68px;
        display: block;
        float: left;
        margin-right: 15px;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
      h6 {
        color: #333;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
        margin-bottom: 5px;
        font-size: 15px;
        font-weight: normal;
      }
      p {
        color: #888888;
        font-size: 13px;
        text-align: justify;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        &.author {
          color: #a6a6a6;
          font-size: 12px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
