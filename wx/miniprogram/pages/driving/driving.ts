// import { routing } from "../../utils/routing"

// function padString(n: number) {
//     return n < 10 ? '0'+n.toFixed(0) : n.toFixed(0)
// }

// function formatDuration(sec: number) {
//     const h = Math.floor(sec/3600)
//     sec -= 3600 * h
//     const m = Math.floor(sec / 60)
//     sec -= 60 * m
//     const s = Math.floor(sec)
//     return {
//         hh: padString(h),
//         mm: padString(m),
//         ss: padString(s),
//     }
// }

function formatFee(cents: number) {
    return (cents / 100).toFixed(2)
}

Page({
    timer: undefined as number|undefined,
    tripID: '',

    data: {
      location: {
        latitude: 30,
        longitude: 120,
      },
      scale: 12,
      elapsed: '00:00:00',
      fee: '0.00',
      markers: [
        {
          iconPath: "/resources/car.png",
          id: 0,
          latitude: 30,
          longitude: 120,
          width: 20,
          height: 20,
        },
      ],
    },

    onLoad (opt: Record<"trip_id", string>) {
        console.log(opt);
        
        this.setupLocationUpdator()
        this.setupTimer()
    },
  
    setupLocationUpdator() {
      wx.startLocationUpdate({
          fail: console.error,
      })
      
      wx.onLocationChange(loc => {
          this.setData({
              location: {
                  latitude: loc.latitude,
                  longitude: loc.longitude,
              },
          })
      })
    },

    setupTimer() {
        let elapsedSec = 0
        this.timer = setInterval(() => {
            elapsedSec++
            this.setData({
                elapsed: `花了 ${elapsedSec} 元`,
                fee: formatFee(elapsedSec),
            })
        }, 1000)
    },

    onUnload() {
        wx.stopLocationUpdate()
        if (this.timer) {
            clearInterval(this.timer)
        }
    },
})