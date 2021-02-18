<template>
  <div class="carousel">
    <!-- autoplay -->
    <Carousel style="height: 100%" autoplay v-model="pageIndex" loop>
      <CarouselItem v-for="(item, i) in carouseList" :key="i">
        <div class="demo_carousel">
          <div class="img">
            <img :src="item.img" :alt="item.title" />
          </div>
          <div class="details">
            <div>
              <h5>{{ item.title }}</h5>
              <h6>{{ item.subtitle }}</h6>
            </div>
            <p>{{ item.author }}</p>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  import img from '@/assets/images/base/home.jpg'
  export default {
    data () {
      return {
        pageIndex: 0,
        carouseList: [
          {
            img: img,
            title: '标题1',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/.ivu-carousel-dots-inside{
  bottom: -2px;
}
.carousel {
  width: 720px;
  height: 330px;
  overflow: hidden;
  .demo_carousel {
    width: 100%;
    height: 100%;
    .img {
      width: 250px;
      height: 100%;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .details {
      margin-left: 265px;
      padding: 40px 0;
      height: 330px;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      justify-content: space-between;
      h5 {
        color: #333333;
        line-height: 1;
        padding-bottom: 15px;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
      }
      h6 {
        color: #666666;
        line-height: 1;
        padding-bottom: 13px;
        display: inline-block;
        font-size: 15px;
        font-weight: 500;
        width: 100%;
      }
      p{
        color: #999999;
        line-height: 1.5;
        padding-bottom: 13px;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
      }
    }
  }
}
</style>
