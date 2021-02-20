<template>
  <div class="right_aside">
    <h5>{{ title }}</h5>
    <ul class="aside_list">
      <li
        v-for="(item, i) in swipeAside"
        :key="i"
        @mouseenter="hoverFn(item)"
        @mouseleave="hoverFnLeave(item)"
        @click="goDetaildPage(item)"
      >
        <i class="index_i" :class="`${i + 1 < 4 ? 'topThree' : ''}`">{{
          i + 1
        }}</i>
        <div class="content">
          <h6>{{ item.title }}</h6>
          <div v-show="item.show" class="details">
            <div class="left">
              <img :src="item.img" :alt="item.title" />
            </div>
            <div class="right">
              {{ item.content }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="more" v-if="swipeAside.length > 5"
      >查看更多<Icon type="ios-arrow-forward"
    /></span>
  </div>
</template>

<script>
  export default {
    props: {
      swipeAside: {
        type: Array,
        default: () => []
      },
      title: {
        type: String,
        default: '热门推荐'
      }
    },
    data () {
      return {
        pageIndex: 0
      }
    },
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
      },
      hoverFn (item) {
        console.log('0000')
        this.swipeAside.map(v => {
          v.show = false
          if (item.id === v.id) {
            v.show = true
          }
        })
      },
      hoverFnLeave (item) {
        this.swipeAside.map(v => {
          v.show = false
          if (item.id === v.id) {
            v.show = true
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.right_aside {
  flex: 1;
  margin-left: 15px;
  width: 100%;
  position: relative;
  h5 {
    width: inherit;
    line-height: 1;
    padding-bottom: 15px;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid #e0e0e0;
  }
  .aside_list {
    width: inherit;
    li {
      position: relative;
      padding-left: 22px;
      padding-top: 15px;
      cursor: pointer;
      .index_i {
        position: absolute;
        top: 16px;
        left: 0px;
        width: 17px;
        height: 17px;
        line-height: 17px;
        text-align: center;
        background-color: #999;
        color: #fff;
        vertical-align: middle;
        display: inline-block;
        font-size: 12px;
        font-style: normal;
        &.topThree {
          background-color: #fc7403;
        }
      }
      .content {
        h6 {
          font-size: 14px;
          height: 20px;
          line-height: 20px;
          font-weight: normal;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .details {
          margin-top: 10px;
          background-color: rgba(247, 247, 247, 0.7);
          border: 1px solid #eee;
          clear: both;
          padding: 6px;
          word-break: break-all;
          zoom: 1;
          overflow: hidden;
          .left {
            float: left;
            display: block;
            img {
              width: 56px;
              height: auto;
              margin-right: 10px;
              display: block;
            }
          }
          .right {
            line-height: 1.5;
            color: #808080;
            display: block;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }
  .more {
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    height: 34px;
    line-height: 34px;
    border-radius: 2px;
    background-color: #f7f7f7;
    text-align: center;
    display: block;
    color: #999999;
  }
}
</style>
