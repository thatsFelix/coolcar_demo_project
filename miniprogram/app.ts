import camelcaseKeys = require("camelcase-keys")
import { IAppOption } from "./appoption"
import { auth } from "./service/proto_gen/auth/auth_pb"
import { rental } from "./service/proto_gen/rental/rental_pb"
import { getSetting, getUserInfo } from "./utils/util"

let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo: (reason?: any) => void

// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      resolveUserInfo = resolve
      rejectUserInfo = reject
    })
  }, 
  onLaunch() {
    // try to get userInfo
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

        // 通知页面程序已经获得了用户信息
        resolveUserInfo(res.userInfo)
      })
      .catch(rejectUserInfo)

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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

            wx.request({
              url: 'http://localhost:8088/v1/trip',
              method: 'POST',
              data: {
                start: 'abcdefg'
              } as rental.v1.ICreateTripRequest,
              header: {
                authorization: 'Bearer ' + loginResp.accessToken
              },
            })

          },
          fail:console.error,
        })
      },
    })
  },

  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
})