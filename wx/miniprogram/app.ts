import camelcaseKeys = require("camelcase-keys")
import { IAppOption } from "./appoption"
import { coolcar } from "./service/proto_gen/trip_pb"

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
    console.log("onLaunchonLaunchonLaunch");
    
    wx.request({
      url: "http://localhost:8082/trip/50922",
      method: "GET",
      success: res => {
          const getTripResp = coolcar.GetTripResponse.fromObject(camelcaseKeys(res.data as object, {
            deep: true,
          }))
          console.log(getTripResp);
      },
      fail: console.error,
    })
    


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