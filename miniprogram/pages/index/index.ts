// index.ts

import { IAppOption } from "../../appoption"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello TypeScript!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    app.globalData.userInfo.then(userInfo => {
      this.setData({
        userInfo,
        hasUserInfo: true
      })
    })
  },

  getUserInfo(e: any) {
    console.log(e);

    if (e.detail.errMsg == "getUserInfo:ok") {
      // user accept to give promission to use userInfo 
      console.log("has promission to getuserinfo")

      const userInfo: WechatMiniprogram.UserInfo = e.detail.userInfo

      app.resolveUserInfo(userInfo)
    }
  }
})
