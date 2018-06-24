var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  onLoad: function () {
    //util.showBusy('请求中...')
    var that = this
    wx.request({
      url: `${config.service.host}?display=json`,
      login: false,
      success(result) {
        //util.showSuccess('请求成功完成')
        //console.log(result.data.data.article_list)
        that.setData({
          article_list: result.data.data.article_list
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  }
  
})