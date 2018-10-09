const API_PREFIX = 'https://api.fangc21.com'
const wxRequest = (params,url) => {
  wx.showToast({
    title: '加载中',
    icon:'loading'
  })
  wx.request({
    url: url,
    method:params.method || 'GET',
    data:params.data || {},
    header:{
      'Content-Type': 'application/json'
    },
    success:(res) => {
      params.success && params.success(res)
      wx.hideToast()
    },
    fail:(res) => {
      params.fail && params.fail(res)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
}

//  home
const getHomeAdfs = (params) => wxRequest(params,API_PREFIX + "/api/v1/adfs?type=1")
const getHomeArticle = (params) => wxRequest(params, API_PREFIX + "/api/v1/article?type=27&&limit=100")
const getHomeRec  = (params) => wxRequest(params,API_PREFIX + "/api/v1/home?area="+ params.query.id)
const getNewDetails = (params) => wxRequest(params,API_PREFIX + "/api/v1/premise/" +
params.query.id)
module.exports = {
  getHomeAdfs,
  getHomeArticle,
  getHomeRec,
  getNewDetails
}