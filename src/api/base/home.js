const homeService = (ajaxinstance) => {
  const homePage = {}

  // 所有右侧栏推荐接口
  homePage.getHomeAsideList = (postData) => {
    return ajaxinstance.get('/api/super/home-aside-list', postData)
  }

  // 幻灯片数据接口
  homePage.getHomeCarouselList = (postData) => {
    return ajaxinstance.get('/api/super/home-carousel', postData)
  }

  // 精品推荐
  homePage.getHomeBoutiquelRecommendList = (postData) => {
    return ajaxinstance.get('/api/super/home-boutique-recommend', postData)
  }

  // 热门推荐
  homePage.getHomeHotRecommendList = (postData) => {
    return ajaxinstance.get('/api/super/home-hot-recommend', postData)
  }

  // 最新更新 接口
  homePage.getHomeLatestUpdatelList = (postData) => {
    return ajaxinstance.get('/api/super/home-latest-update', postData)
  }

  return homePage
}

export default homeService
