"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcaseKeys = require("camelcase-keys");
var auth_pb_1 = require("./service/proto_gen/auth/auth_pb");
App({
    globalData: {},
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
                wx.request({
                    url: "http://localhost:8088/v1/auth/login",
                    method: "POST",
                    data: {
                        code: res.code,
                    },
                    success: function (res) {
                        var loginResp = auth_pb_1.auth.v1.LoginResponse.fromObject(camelcaseKeys(res.data));
                        console.log(loginResp);
                    },
                    fail: console.error,
                });
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQWdEO0FBQ2hELDREQUF1RDtBQUd2RCxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVEsRUFBUjtRQUVFLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFHL0IsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRXJCLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLHFDQUFxQztvQkFDMUMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDVTtvQkFDMUIsT0FBTyxFQUFFLFVBQUEsR0FBRzt3QkFDVixJQUFNLFNBQVMsR0FBMkIsY0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBYyxDQUFDLENBQUMsQ0FBQTt3QkFDN0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFekIsQ0FBQztvQkFDRCxJQUFJLEVBQUMsT0FBTyxDQUFDLEtBQUs7aUJBQ25CLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhbWVsY2FzZUtleXMgPSByZXF1aXJlKFwiY2FtZWxjYXNlLWtleXNcIilcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9zZXJ2aWNlL3Byb3RvX2dlbi9hdXRoL2F1dGhfcGJcIlxuXG4vLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHt9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3YxL2F1dGgvbG9naW5cIixcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6IHsgXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcbiAgICAgICAgICB9IGFzIGF1dGgudjEuSUxvZ2luUmVxdWVzdCxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwOiBhdXRoLnYxLklMb2dpblJlc3BvbnNlID0gYXV0aC52MS5Mb2dpblJlc3BvbnNlLmZyb21PYmplY3QoY2FtZWxjYXNlS2V5cyhyZXMuZGF0YSBhcyBvYmplY3QpKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXNwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDpjb25zb2xlLmVycm9yLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=