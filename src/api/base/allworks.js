const allworksService = (ajaxinstance) => {
  const allworks = {}
  // 条件

  //   列表
  allworks.allworksList = (postData) => {
    return ajaxinstance.post('/api/super/allworks-list', postData)
  }

  return allworks
}

export default allworksService
