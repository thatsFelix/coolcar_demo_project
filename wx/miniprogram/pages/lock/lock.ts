import { IAppOption } from "../../appoption"
import { routing } from "../../utils/routing"

const shareLocationKey = "share_location"

Page({
  data: {
    avatarURL: '',
    shareLocation: false
  },

  async onLoad() {
    const userInfo = await getApp<IAppOption>().globalData.userInfo
    
    this.setData({
      avatarURL: userInfo.avatarUrl,
      shareLocation: wx.getStorageSync(shareLocationKey) || false,
    })
  },

  onGetUserInfo(e: any) {
    console.log("onGetUserInfo");
    
    const userInfo: WechatMiniprogram.UserInfo = e.detail.userInfo
    if (userInfo) {
      getApp<IAppOption>().resolveUserInfo(userInfo)
      this.setData({
          shareLocation: true,
      })
      wx.setStorageSync(shareLocationKey, true)
    }
  },
  
  onShareLocation(e: any) {
    this.data.shareLocation = e.detail.value
    wx.setStorageSync(shareLocationKey, this.data.shareLocation)
  },

  onUnlockTap() {
    wx.getLocation({
      type: "gcj02",
      success: loc => {
        console.log("start a trip", {
          location: {
            latitude: loc.latitude,
            longitude: loc.longitude,
          },
          avatarURL: this.data.shareLocation ? this.data.avatarURL : '',
          // carID: '',
        });

        wx.showLoading({
          title: "开锁中",
          mask: true,
        })
    
        setTimeout(() => {
          wx.redirectTo({
            url: routing.driving({
              trip_id: "tripId123"
            }),
            complete: _ => {
              wx.hideLoading()
            }
          })
        }, 2000);
      },
      fail: _ => {
        wx.showToast({
          icon: 'none',
          title: '请重新设置授权位置信息',
        })
      }
    })
  }
})