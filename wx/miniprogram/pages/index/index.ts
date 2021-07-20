// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data() {
    return {
      setting: {
        skew: 0,
        rotate: 0,
        showLocation: true,
        showScale: true,
        subKey: '',
        layerStyle: -1,
        enableZoom: true,
        enableScroll: true,
        enabelCompass: false,
        showCompass: false,
        enable3D: false,
        enableOverlooking: false,
        enableSatellite: false,
        enableTraffic: false,
      },
      location: {
        latitude: 31,
        longitude: 120
      },
      scale: 10,
      markers: [
        
      ]
    }
  }
})
