"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcaseKeys = require("camelcase-keys");
var auth_pb_1 = require("./service/proto_gen/auth/auth_pb");
var util_1 = require("./utils/util");
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        console.log("onLaunch function invoked");
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        util_1.getSetting()
            .then(function (res) {
            if (res.authSetting['scope.userInfo']) {
                return util_1.getUserInfo();
            }
            return Promise.resolve(undefined);
        })
            .then(function (res) {
            if (!res) {
                return;
            }
            _this.globalData.userInfo = res.userInfo;
            if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQWdEO0FBRWhELDREQUF1RDtBQUN2RCxxQ0FBc0Q7QUFHdEQsR0FBRyxDQUFhO0lBQ2QsVUFBVSxFQUFFLEVBQUU7SUFDZCxRQUFRLEVBQVI7UUFBQSxpQkFpREM7UUFoREMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBRXhDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFL0IsaUJBQVUsRUFBRTthQUNULElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckMsT0FBTyxrQkFBVyxFQUFFLENBQUE7YUFDckI7WUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1IsT0FBTTthQUNQO1lBRUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtZQUd2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2hDO1FBRUgsQ0FBQyxDQUFDLENBQUE7UUFHSixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFckIsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUscUNBQXFDO29CQUMxQyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUNVO29CQUUxQixPQUFPLEVBQUUsVUFBQSxHQUFHO3dCQUNWLElBQU0sU0FBUyxHQUEyQixjQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFjLENBQUMsQ0FBQyxDQUFBO3dCQUM3RyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUV6QixDQUFDO29CQUNELElBQUksRUFBQyxPQUFPLENBQUMsS0FBSztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FtZWxjYXNlS2V5cyA9IHJlcXVpcmUoXCJjYW1lbGNhc2Uta2V5c1wiKVxuaW1wb3J0IHsgSUFwcE9wdGlvbiB9IGZyb20gXCIuL2FwcG9wdGlvblwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vc2VydmljZS9wcm90b19nZW4vYXV0aC9hdXRoX3BiXCJcbmltcG9ydCB7IGdldFNldHRpbmcsIGdldFVzZXJJbmZvIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiXG5cbi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge30sIFxuICBvbkxhdW5jaCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uTGF1bmNoIGZ1bmN0aW9uIGludm9rZWRcIilcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgIGdldFNldHRpbmcoKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIHJldHVybiBnZXRVc2VySW5mbygpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHsgXG4gICAgICAgIGlmICghcmVzKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuICAgICAgICAvLyDpgJrnn6XpobXpnaLmiJHojrflvpfkuobnlKjmiLfkv6Hmga9cbiAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSlcblxuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3YxL2F1dGgvbG9naW5cIixcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGRhdGE6IHsgXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcbiAgICAgICAgICB9IGFzIGF1dGgudjEuSUxvZ2luUmVxdWVzdCxcblxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2dpblJlc3A6IGF1dGgudjEuSUxvZ2luUmVzcG9uc2UgPSBhdXRoLnYxLkxvZ2luUmVzcG9uc2UuZnJvbU9iamVjdChjYW1lbGNhc2VLZXlzKHJlcy5kYXRhIGFzIG9iamVjdCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpblJlc3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOmNvbnNvbGUuZXJyb3IsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG59KSJdfQ==