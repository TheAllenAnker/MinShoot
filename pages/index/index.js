//index.js
//获取应用实例
const app = getApp()
var common = require('../utils/commons.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function() {
    this.setData({
      userInfo: "This is a test page."
    })
  },

  clickToTest: function(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    common.sayHello(name)
    console.log(name)
    common.sayGoodbye(name)
  }
})
