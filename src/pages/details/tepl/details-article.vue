<template>
  <div class="details_article">
    <div class="left">
      <h5>热门推荐<em>(124章)</em><span>全部目录</span></h5>
      <div class="content">
        <h6>第一百二十三章 摘星手<span>更新时间：20/12/12 22:39:59</span></h6>
        <p>
          姜子牙透过天眼，和黑袍视线对上。 姜子牙透过天眼，和黑袍视线对上。
          姜子牙透过天眼，和黑袍视线对上。 姜子牙透过天眼，和黑袍视线对上。
          姜子牙透过天眼，和黑袍视线对上。
        </p>
      </div>
      <h5>评论区<em>(2条)</em><span>我也要评论</span></h5>

      <ul class="comment">
        <li>
          <div class="avatar">
            <Avatar
              size="large"
              src="https://i.loli.net/2017/08/21/599a521472424.jpg"
            />
          </div>
          <div class="comment_info">
            <h6>墨书白</h6>
            <p class="info">
              真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！
            </p>
            <p class="date">2020-12-18 16:32:18</p>
          </div>
        </li>
        <li>
          <div class="avatar">
            <Avatar
              size="large"
              src="https://i.loli.net/2017/08/21/599a521472424.jpg"
            />
          </div>
          <div class="comment_info">
            <h6>墨书白</h6>
            <p class="info">
              真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！！真精彩，真棒！真精彩，真棒！真精彩，真棒！真精彩，真棒！
            </p>
            <p class="date">2020-12-18 16:32:18</p>
          </div>
        </li>
      </ul>
      <div class="lookmore">
        <span>查看全部评论<Icon type="ios-arrow-forward"/></span>
      </div>
      <div class="take_comment">
        <p>发表评论</p>
        <Input
          v-model="textareaCont"
          type="textarea"
          :rows="4"
          placeholder="发表评论..."
        />
        <p class="btn">
          <Button type="primary" shape="circle">发表</Button>
        </p>
      </div>
    </div>
    <div class="right">
      <AvatarInfo />
      <RecommendList />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      AvatarInfo: () => import('./avatar-info'),
      RecommendList: () => import('./recommend-list')
    },
    data () {
      return {
        textareaCont: ''
      }
    },
    methods: {},
    mounted () {}
  }
</script>

<style lang="less" scoped>
.details_article {
  margin-top: 15px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  display: -webkit-flex;
  .left {
    width: 750px;
    padding: 20px 15px;
    background: #fff;
    border-radius: 6px;
    h5 {
      width: 100%;
      line-height: 1;
      padding-bottom: 15px;
      display: inline-block;
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid #e0e0e0;
      em {
        font-size: 14px;
        color: #666;
        font-style: normal;
        font-weight: normal;
        margin-left: 8px;
      }
      span {
        float: right;
        display: block;
        color: #333;
        font-size: 14px;
        font-weight: normal;
        padding-top: 3px;
      }
    }
    .content {
      padding: 15px 0px 30px;
      h6 {
        outline: none;
        color: #333;
        font-weight: normal;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 15px;
        span {
          float: right;
          display: block;
          color: #999999;
          font-size: 14px;
          font-weight: normal;
        }
      }
      p {
        text-indent: 24px;
        font-size: 14px;
        color: #666;
        line-height: 24px;
      }
    }
    .comment {
      width: 100%;
      padding-top: 20px;
      li {
        display: flex;
        display: -webkit-flex;
        margin-bottom: 20px;
        &:last-child {
          .comment_info {
            border-bottom: none;
          }
        }
      }
      .avatar {
        width: 40px;
        height: 40px;
        overflow: hidden;
        display: block;
        margin-right: 15px;
      }
      .comment_info {
        flex: 1;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
        h6 {
          font-size: 15px;
          color: #333;
          height: 24px;
          line-height: 24px;
        }
        p {
          &.info {
            font-size: 14px;
            color: #666;
            line-height: 24px;
            text-align: justify;
          }
          &.date {
            margin-top: 15px;
            height: 22px;
            line-height: 22px;
            color: #999999;
            font-size: 14px;
          }
        }
      }
    }
    .lookmore {
      width: 100%;
      span {
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
    .take_comment {
      padding-top: 20px;
      p {
        font-size: 15px;
        color: #666;
        line-height: 26px;
        height: 26px;
        margin-bottom: 8px;
        &.btn {
          text-align: right;
          margin-top: 10px;
        }
      }
    }
  }
  .right {
    margin-left: 15px;
    flex: 1;
  }
}
/deep/.ivu-btn {
  padding: 0 35px;
}
</style>
