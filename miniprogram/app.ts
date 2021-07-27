import camelcaseKeys = require("camelcase-keys")
import { IAppOption } from "./appoption"
import { auth } from "./service/proto_gen/auth/auth_pb"
import { getSetting, getUserInfo } from "./utils/util"

// app.ts
App<IAppOption>({
  globalData: {}, 
  onLaunch() {
    console.log("onLaunch function invoked")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    getSetting()
      .then(res => {
        if (res.authSetting['scope.userInfo']) {
          return getUserInfo()
        }
        return Promise.resolve(undefined)
      })
      .then(res => { 
        if (!res) {
          return
        } 
        
        this.globalData.userInfo = res.userInfo

        // 通知页面我获得了用户信息
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
        
      })

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: "http://localhost:8088/v1/auth/login",
          method: "POST",
          data: { 
            code: res.code,
          } as auth.v1.ILoginRequest,

          success: res => {
            const loginResp: auth.v1.ILoginResponse = auth.v1.LoginResponse.fromObject(camelcaseKeys(res.data as object))
            console.log(loginResp);
            
          },
          fail:console.error,
        })
      },
    })
  },
})