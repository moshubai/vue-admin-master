const mapService = (ajaxinstance) => {
  const map = {}
  map.mapListArr = (postData) => {
    return ajaxinstance.get('/api/web/map/list', postData)
  }
  return map
}

export default mapService
