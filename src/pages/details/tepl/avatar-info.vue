<template>
  <div class="avatar_info">
    <div class="avatar">
      <Avatar
        :size="70"
        src="https://i.loli.net/2017/08/21/599a521472424.jpg"
      />
      <p>
        <Tag color="primary">签约作家</Tag>
      </p>
    </div>
    <h4>墨书白</h4>
    <p class="say">作者有话说：</p>
    <p style="text-align: justify">亲亲们，你们的支持是我最大的动力！求点击、求推荐、求书评哦！</p>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
.avatar_info {
  width: 100%;
  padding: 20px 15px;
  background: #fff;
  border-radius: 6px;
  .avatar {
    text-align: center;
    p {
      position: relative;
      top: -5px;
    }
  }
  h4 {
    width: 100%;
    color: #333;
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    border-bottom: 1px dotted #e0e0e0;
    height: 36px;
    line-height: 36px;
  }
  p {
    line-height: 1.6;
    &.say {
      color: #333;
      padding-bottom: 8px;
      padding-top: 10px;
    }
  }
}
/deep/.ivu-tag {
  margin: 0;
}
</style>
