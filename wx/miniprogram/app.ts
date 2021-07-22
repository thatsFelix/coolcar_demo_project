import { IAppOption } from "./appoption"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
// let rejectUserInfo: (reason?: any) => void

// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, _) => {
      resolveUserInfo = resolve
      // rejectUserInfo = reject
    })
  },

  onLaunch() {
    /**
    wx.request({
      url: "http://localhost:8082/trip/50922",
      method: "GET",
      success: res => {
          const getTripResp = res.data

      },
      fail: console.error,
    })
    */


    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  }
})