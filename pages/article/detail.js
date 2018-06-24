var config = require('../../config')
var util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js')

var options = ""

Page({
  onLoad: function (options) {
    var that = this
    
    wx.request({
      url: `${config.service.host}/blog/detail?id=` +options.id+"&display=json",
      login: false,
      success(result) {
        var article = result.data.data.articleInfo.content;
        WxParse.wxParse('article', 'html', article, that, 5)
        that.setData({
          articleInfo: result.data.data.articleInfo
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  }

})