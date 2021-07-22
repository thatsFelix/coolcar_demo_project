"use strict";
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
    onMyLocationTap: function () {
        var _this = this;
        wx.getLocation({
            type: "gcj02",
            success: function (res) {
                _this.setData({
                    location: {
                        latitude: res.latitude,
                        longitude: res.longitude,
                    }
                });
            },
            fail: function (_) {
                wx.showModal({
                    title: "获取定位失败, 请问需要重新授权吗?",
                    success: function (res) {
                        if (res.confirm) {
                            console.log("用户点击了确定");
                            wx.openSetting({
                                success: function (res) {
                                    console.log(res.authSetting);
                                }
                            });
                        }
                    }
                });
            }
        });
    },
    moveCars: function () {
        var mapContext = wx.createMapContext("map");
        var dest = {
            latitude: 23.099994,
            longitude: 114.324520,
        };
        mapContext.translateMarker({
            markerId: 0,
            destination: {
                latitude: dest.latitude + 1,
                longitude: dest.longitude + 1,
            },
            autoRotate: false,
            rotate: 0,
            duration: 5000,
        });
    },
    onScanTap: function () {
        wx.scanCode({
            success: function (res) {
                console.log(res);
                wx.navigateTo({
                    url: "/pages/register/register"
                });
            },
            fail: console.error,
        });
    },
    onMyTripsTap: function () {
        wx.navigateTo({
            url: "/pages/mytrips/mytrips",
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsQ0FBQztZQUNQLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDZCxVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsS0FBSztZQUNmLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFDRCxRQUFRLEVBQUU7WUFDUixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsVUFBVTtTQUN0QjtRQUNELEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsRUFBRTthQUNYO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0Y7S0FDRjtJQUVELGVBQWU7UUFBZixpQkErQkM7UUE5QkMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRTt3QkFDUixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztxQkFDekI7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLENBQUM7Z0JBS0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsb0JBQW9CO29CQUMzQixPQUFPLEVBQUUsVUFBQSxHQUFHO3dCQUNWLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0NBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Z0NBQzlCLENBQUM7NkJBQ0YsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdDLElBQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQTtRQUNELFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDekIsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQzthQUM5QjtZQUNELFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLDBCQUEwQjtpQkFDaEMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksRUFBRSxPQUFPLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsd0JBQXdCO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGF2YXRhclVSTDogJycsXG4gICAgc2V0dGluZzoge1xuICAgICAgc2tldzogMCxcbiAgICAgIHJvdGF0ZTogMCxcbiAgICAgIHNob3dMb2NhdGlvbjogdHJ1ZSxcbiAgICAgIHNob3dTY2FsZTogdHJ1ZSxcbiAgICAgIHN1YktleTogJycsXG4gICAgICBsYXllclN0eWxlOiAtMSxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBlbmFibGVTY3JvbGw6IHRydWUsXG4gICAgICBlbmFibGVSb3RhdGU6IGZhbHNlLFxuICAgICAgc2hvd0NvbXBhc3M6IGZhbHNlLFxuICAgICAgZW5hYmxlM0Q6IGZhbHNlLFxuICAgICAgZW5hYmxlT3Zlcmxvb2tpbmc6IGZhbHNlLFxuICAgICAgZW5hYmxlU2F0ZWxsaXRlOiBmYWxzZSxcbiAgICAgIGVuYWJsZVRyYWZmaWM6IGZhbHNlLFxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgIGxhdGl0dWRlOiAyMy4wOTk5OTQsXG4gICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXG4gICAgfSxcbiAgICBzY2FsZTogMTAsXG4gICAgbWFya2VyczogW1xuICAgICAge1xuICAgICAgICBpY29uUGF0aDogXCIvcmVzb3VyY2VzL2Nhci5wbmdcIixcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGxhdGl0dWRlOiAyMy4wOTk5OTQsXG4gICAgICAgIGxvbmdpdHVkZTogMTEzLjMyNDUyMCxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvblBhdGg6IFwiL3Jlc291cmNlcy9jYXIucG5nXCIsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBsYXRpdHVkZTogMjMuMDk5OTk0LFxuICAgICAgICBsb25naXR1ZGU6IDExNC4zMjQ1MjAsXG4gICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBvbk15TG9jYXRpb25UYXAgKCkge1xuICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgIHR5cGU6IFwiZ2NqMDJcIixcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlcy5sb25naXR1ZGUsXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IF8gPT4ge1xuICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAvLyAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAvLyAgIHRpdGxlOiBcIuivt+WJjeW+gOiuvue9rumhtemHjeaWsOaOiOadg1wiLFxuICAgICAgICAvLyB9KVxuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiBcIuiOt+WPluWumuS9jeWksei0pSwg6K+36Zeu6ZyA6KaB6YeN5paw5o6I5p2D5ZCXP1wiLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfngrnlh7vkuobnoa7lrppcIik7XG4gICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmF1dGhTZXR0aW5nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBtb3ZlQ2FycygpIHtcbiAgICBjb25zdCBtYXBDb250ZXh0ID0gd3guY3JlYXRlTWFwQ29udGV4dChcIm1hcFwiKVxuICAgIGNvbnN0IGRlc3QgPSB7XG4gICAgICBsYXRpdHVkZTogMjMuMDk5OTk0LFxuICAgICAgbG9uZ2l0dWRlOiAxMTQuMzI0NTIwLFxuICAgIH1cbiAgICBtYXBDb250ZXh0LnRyYW5zbGF0ZU1hcmtlcih7XG4gICAgICBtYXJrZXJJZDogMCxcbiAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgIGxhdGl0dWRlOiBkZXN0LmxhdGl0dWRlICsgMSxcbiAgICAgICAgbG9uZ2l0dWRlOiBkZXN0LmxvbmdpdHVkZSArIDEsXG4gICAgICB9LFxuICAgICAgYXV0b1JvdGF0ZTogZmFsc2UsXG4gICAgICByb3RhdGU6IDAsXG4gICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICB9KVxuICB9LFxuXG4gIG9uU2NhblRhcCgpIHtcbiAgICB3eC5zY2FuQ29kZSh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyXCJcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBjb25zb2xlLmVycm9yLFxuICAgIH0pXG4gIH0sXG5cbiAgb25NeVRyaXBzVGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBcIi9wYWdlcy9teXRyaXBzL215dHJpcHNcIixcbiAgICB9KVxuICB9LFxufSlcbiJdfQ==