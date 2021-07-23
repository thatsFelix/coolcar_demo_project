"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcaseKeys = require("camelcase-keys");
var trip_pb_1 = require("./service/proto_gen/trip_pb");
var resolveUserInfo;
App({
    globalData: {
        userInfo: new Promise(function (resolve, _) {
            resolveUserInfo = resolve;
        })
    },
    onLaunch: function () {
        console.log("onLaunchonLaunchonLaunch");
        wx.request({
            url: "http://localhost:8082/trip/50922",
            method: "GET",
            success: function (res) {
                var getTripResp = trip_pb_1.coolcar.GetTripResponse.fromObject(camelcaseKeys(res.data));
                console.log(getTripResp);
            },
            fail: console.error,
        });
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
    },
    resolveUserInfo: function (userInfo) {
        resolveUserInfo(userInfo);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQWdEO0FBRWhELHVEQUFxRDtBQUVyRCxJQUFJLGVBQXNHLENBQUE7QUFJMUcsR0FBRyxDQUFhO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsZUFBZSxHQUFHLE9BQU8sQ0FBQTtRQUUzQixDQUFDLENBQUM7S0FDSDtJQUVELFFBQVEsRUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUV4QyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGtDQUFrQztZQUN2QyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1IsSUFBTSxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBYyxDQUFDLENBQUMsQ0FBQTtnQkFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtRQUtGLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFdkIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlLEVBQWYsVUFBZ0IsUUFBb0M7UUFDbEQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FtZWxjYXNlS2V5cyA9IHJlcXVpcmUoXCJjYW1lbGNhc2Uta2V5c1wiKVxuaW1wb3J0IHsgSUFwcE9wdGlvbiB9IGZyb20gXCIuL2FwcG9wdGlvblwiXG5pbXBvcnQgeyBjb29sY2FyIH0gZnJvbSBcIi4vc2VydmljZS9wcm90b19nZW4vdHJpcF9wYlwiXG5cbmxldCByZXNvbHZlVXNlckluZm86ICh2YWx1ZTogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8gfCBQcm9taXNlTGlrZTxXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbz4pID0+IHZvaWRcbi8vIGxldCByZWplY3RVc2VySW5mbzogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxuXG4vLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbmV3IFByb21pc2UoKHJlc29sdmUsIF8pID0+IHtcbiAgICAgIHJlc29sdmVVc2VySW5mbyA9IHJlc29sdmVcbiAgICAgIC8vIHJlamVjdFVzZXJJbmZvID0gcmVqZWN0XG4gICAgfSlcbiAgfSxcblxuICBvbkxhdW5jaCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uTGF1bmNob25MYXVuY2hvbkxhdW5jaFwiKTtcbiAgICBcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODIvdHJpcC81MDkyMlwiLFxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBjb25zdCBnZXRUcmlwUmVzcCA9IGNvb2xjYXIuR2V0VHJpcFJlc3BvbnNlLmZyb21PYmplY3QoY2FtZWxjYXNlS2V5cyhyZXMuZGF0YSBhcyBvYmplY3QpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGdldFRyaXBSZXNwKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBjb25zb2xlLmVycm9yLFxuICAgIH0pXG4gICAgXG5cblxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG5cbiAgcmVzb2x2ZVVzZXJJbmZvKHVzZXJJbmZvOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbykge1xuICAgIHJlc29sdmVVc2VySW5mbyh1c2VySW5mbylcbiAgfVxufSkiXX0=