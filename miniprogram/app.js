"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camelcaseKeys = require("camelcase-keys");
const auth_pb_1 = require("./service/proto_gen/auth/auth_pb");
const util_1 = require("./utils/util");
let resolveUserInfo;
let rejectUserInfo;
App({
    globalData: {
        userInfo: new Promise((resolve, reject) => {
            resolveUserInfo = resolve;
            rejectUserInfo = reject;
        })
    },
    onLaunch() {
        util_1.getSetting()
            .then(res => {
            if (res.authSetting['scope.userInfo']) {
                return util_1.getUserInfo();
            }
            return Promise.resolve(undefined);
        })
            .then(res => {
            if (!res) {
                return;
            }
            resolveUserInfo(res.userInfo);
        })
            .catch(rejectUserInfo);
        const logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: res => {
                console.log(res.code);
                wx.request({
                    url: "http://localhost:8088/v1/auth/login",
                    method: "POST",
                    data: {
                        code: res.code,
                    },
                    success: res => {
                        const loginResp = auth_pb_1.auth.v1.LoginResponse.fromObject(camelcaseKeys(res.data));
                        console.log(loginResp);
                    },
                    fail: console.error,
                });
            },  
        });
    },
    resolveUserInfo(userInfo) {
        resolveUserInfo(userInfo);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWdEO0FBRWhELDhEQUF1RDtBQUN2RCx1Q0FBc0Q7QUFFdEQsSUFBSSxlQUFzRyxDQUFBO0FBQzFHLElBQUksY0FBc0MsQ0FBQTtBQUcxQyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDeEMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtZQUN6QixjQUFjLEdBQUcsTUFBTSxDQUFBO1FBQ3pCLENBQUMsQ0FBQztLQUNIO0lBQ0QsUUFBUTtRQUVOLGlCQUFVLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckMsT0FBTyxrQkFBVyxFQUFFLENBQUE7YUFDckI7WUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUixPQUFNO2FBQ1A7WUFHRCxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUd4QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRXJCLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLHFDQUFxQztvQkFDMUMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDVTtvQkFFMUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLE1BQU0sU0FBUyxHQUEyQixjQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFjLENBQUMsQ0FBQyxDQUFBO3dCQUM3RyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUV6QixDQUFDO29CQUNELElBQUksRUFBQyxPQUFPLENBQUMsS0FBSztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBb0M7UUFDbEQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FtZWxjYXNlS2V5cyA9IHJlcXVpcmUoXCJjYW1lbGNhc2Uta2V5c1wiKVxuaW1wb3J0IHsgSUFwcE9wdGlvbiB9IGZyb20gXCIuL2FwcG9wdGlvblwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vc2VydmljZS9wcm90b19nZW4vYXV0aC9hdXRoX3BiXCJcbmltcG9ydCB7IGdldFNldHRpbmcsIGdldFVzZXJJbmZvIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiXG5cbmxldCByZXNvbHZlVXNlckluZm86ICh2YWx1ZTogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8gfCBQcm9taXNlTGlrZTxXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbz4pID0+IHZvaWRcbmxldCByZWplY3RVc2VySW5mbzogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxuXG4vLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZVVzZXJJbmZvID0gcmVzb2x2ZVxuICAgICAgcmVqZWN0VXNlckluZm8gPSByZWplY3RcbiAgICB9KVxuICB9LCBcbiAgb25MYXVuY2goKSB7XG4gICAgLy8gdHJ5IHRvIGdldCB1c2VySW5mb1xuICAgIGdldFNldHRpbmcoKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIHJldHVybiBnZXRVc2VySW5mbygpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmAmuefpemhtemdoueoi+W6j+W3sue7j+iOt+W+l+S6hueUqOaIt+S/oeaBr1xuICAgICAgICByZXNvbHZlVXNlckluZm8ocmVzLnVzZXJJbmZvKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3RVc2VySW5mbylcblxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdjEvYXV0aC9sb2dpblwiLFxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgZGF0YTogeyBcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlLFxuICAgICAgICAgIH0gYXMgYXV0aC52MS5JTG9naW5SZXF1ZXN0LFxuXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzcDogYXV0aC52MS5JTG9naW5SZXNwb25zZSA9IGF1dGgudjEuTG9naW5SZXNwb25zZS5mcm9tT2JqZWN0KGNhbWVsY2FzZUtleXMocmVzLmRhdGEgYXMgb2JqZWN0KSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6Y29uc29sZS5lcnJvcixcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcblxuICByZXNvbHZlVXNlckluZm8odXNlckluZm86IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvKSB7XG4gICAgcmVzb2x2ZVVzZXJJbmZvKHVzZXJJbmZvKVxuICB9LFxufSkiXX0=