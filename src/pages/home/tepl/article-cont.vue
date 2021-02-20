<template>
  <div class="article_cont">
    <h5>{{ title }}</h5>
    <ul class="article_ul">
      <li v-for="(item, i) in recommendList" :key="i" @click="goDetaildPage(item)">
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
  export default {
    props: {
      title: {
        type: String,
        default: '精品推荐'
      },
      recommendList: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      goDetaildPage (item) {
        const { id, category } = item
        let query = {
          id,
          v: category
        }
        this.$router.push({
          path: `/details/${id}`,
          query
        });
      }
    },
    mounted () {}
  }
</script>

<style lang="less" scoped>
.article_cont {
  width: 720px;
  overflow: hidden;
  h5 {
    width: inherit;
    line-height: 1;
    padding-bottom: 15px;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid #e0e0e0;
  }
  .article_ul {
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
    li {
      cursor: pointer;
      padding: 10px 0;
      width: 50%;
      float: left;
      .img {
        width: 100px;
        height: 150px;
        display: block;
        float: left;
        margin-right: 15px;
        overflow: hidden;
        img {
          width: 100%;
          display: block;
        }
      }
      h6 {
        color: #333;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
        margin-bottom: 8px;
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
        -webkit-line-clamp: 4;
        &.author {
          color: #a6a6a6;
          font-size: 12px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
