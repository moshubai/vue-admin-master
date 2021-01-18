const homeService = (ajaxinstance) => {
  const homePage = {}

  homePage.postAddBankCard = (postData) => {
    return ajaxinstance.get('/credit/web/super/add-card', postData)
  }
  return homePage
}

export default homeService
