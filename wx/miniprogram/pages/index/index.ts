// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    avatarURL: '',
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: '',
      layerStyle: -1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 23.099994,
      longitude: 113.324520,
    },
    scale: 10,
    markers: [
      {
        iconPath: "/resources/car.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50,
      },
      {
        iconPath: "/resources/car.png",
        id: 1,
        latitude: 23.099994,
        longitude: 114.324520,
        width: 50,
        height: 50,
      },
    ],
  },

  onMyLocationTap () {
    wx.getLocation({
      type: "gcj02",
      success: res => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          }
        })
      },
      fail: _ => {
        // wx.showToast({
        //   icon: "none",
        //   title: "请前往设置页重新授权",
        // })
        wx.showModal({
          title: "获取定位失败, 请问需要重新授权吗?",
          success: res => {
            if (res.confirm) {
              console.log("用户点击了确定");
              wx.openSetting({
                success: res => {
                  console.log(res.authSetting)
                }
              })
            }
          }
        })
      }
    })
  },

  moveCars() {
    const mapContext = wx.createMapContext("map")
    const dest = {
      latitude: 23.099994,
      longitude: 114.324520,
    }
    mapContext.translateMarker({
      markerId: 0,
      destination: {
        latitude: dest.latitude + 1,
        longitude: dest.longitude + 1,
      },
      autoRotate: false,
      rotate: 0,
      duration: 5000,
    })
  },

  onScanTap() {
    wx.scanCode({
      success: res => {
        console.log(res);
        wx.navigateTo({
          url: "/pages/register/register"
        })
      },
      fail: console.error,
    })
  },

  onMyTripsTap() {
    wx.navigateTo({
      url: "/pages/mytrips/mytrips",
    })
  },
})
