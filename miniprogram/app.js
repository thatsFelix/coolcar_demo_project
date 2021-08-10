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
                        wx.request({
                            url: 'http://localhost:8088/v1/trip',
                            method: 'POST',
                            data: {
                                start: 'abcdefg'
                            },
                            header: {
                                authorization: 'Bearer ' + loginResp.accessToken
                            },
                        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQWdEO0FBRWhELDhEQUF1RDtBQUV2RCx1Q0FBc0Q7QUFFdEQsSUFBSSxlQUFzRyxDQUFBO0FBQzFHLElBQUksY0FBc0MsQ0FBQTtBQUcxQyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDeEMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtZQUN6QixjQUFjLEdBQUcsTUFBTSxDQUFBO1FBQ3pCLENBQUMsQ0FBQztLQUNIO0lBQ0QsUUFBUTtRQUVOLGlCQUFVLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckMsT0FBTyxrQkFBVyxFQUFFLENBQUE7YUFDckI7WUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUixPQUFNO2FBQ1A7WUFHRCxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUd4QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRXJCLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLHFDQUFxQztvQkFDMUMsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDVTtvQkFFMUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLE1BQU0sU0FBUyxHQUEyQixjQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFjLENBQUMsQ0FBQyxDQUFBO3dCQUM3RyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUV2QixFQUFFLENBQUMsT0FBTyxDQUFDOzRCQUNULEdBQUcsRUFBRSwrQkFBK0I7NEJBQ3BDLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRTtnQ0FDSixLQUFLLEVBQUUsU0FBUzs2QkFDZTs0QkFDakMsTUFBTSxFQUFFO2dDQUNOLGFBQWEsRUFBRSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVc7NkJBQ2pEO3lCQUNGLENBQUMsQ0FBQTtvQkFFSixDQUFDO29CQUNELElBQUksRUFBQyxPQUFPLENBQUMsS0FBSztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBb0M7UUFDbEQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FtZWxjYXNlS2V5cyA9IHJlcXVpcmUoXCJjYW1lbGNhc2Uta2V5c1wiKVxuaW1wb3J0IHsgSUFwcE9wdGlvbiB9IGZyb20gXCIuL2FwcG9wdGlvblwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vc2VydmljZS9wcm90b19nZW4vYXV0aC9hdXRoX3BiXCJcbmltcG9ydCB7IHJlbnRhbCB9IGZyb20gXCIuL3NlcnZpY2UvcHJvdG9fZ2VuL3JlbnRhbC9yZW50YWxfcGJcIlxuaW1wb3J0IHsgZ2V0U2V0dGluZywgZ2V0VXNlckluZm8gfSBmcm9tIFwiLi91dGlscy91dGlsXCJcblxubGV0IHJlc29sdmVVc2VySW5mbzogKHZhbHVlOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyB8IFByb21pc2VMaWtlPFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvPikgPT4gdm9pZFxubGV0IHJlamVjdFVzZXJJbmZvOiAocmVhc29uPzogYW55KSA9PiB2b2lkXG5cbi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvOiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlVXNlckluZm8gPSByZXNvbHZlXG4gICAgICByZWplY3RVc2VySW5mbyA9IHJlamVjdFxuICAgIH0pXG4gIH0sIFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyB0cnkgdG8gZ2V0IHVzZXJJbmZvXG4gICAgZ2V0U2V0dGluZygpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFVzZXJJbmZvKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZClcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAoIXJlcykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YCa55+l6aG16Z2i56iL5bqP5bey57uP6I635b6X5LqG55So5oi35L+h5oGvXG4gICAgICAgIHJlc29sdmVVc2VySW5mbyhyZXMudXNlckluZm8pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdFVzZXJJbmZvKVxuXG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC92MS9hdXRoL2xvZ2luXCIsXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBkYXRhOiB7IFxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgfSBhcyBhdXRoLnYxLklMb2dpblJlcXVlc3QsXG5cbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9naW5SZXNwOiBhdXRoLnYxLklMb2dpblJlc3BvbnNlID0gYXV0aC52MS5Mb2dpblJlc3BvbnNlLmZyb21PYmplY3QoY2FtZWxjYXNlS2V5cyhyZXMuZGF0YSBhcyBvYmplY3QpKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXNwKTtcblxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OC92MS90cmlwJyxcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogJ2FiY2RlZmcnXG4gICAgICAgICAgICAgIH0gYXMgcmVudGFsLnYxLklDcmVhdGVUcmlwUmVxdWVzdCxcbiAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgbG9naW5SZXNwLmFjY2Vzc1Rva2VuXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOmNvbnNvbGUuZXJyb3IsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG5cbiAgcmVzb2x2ZVVzZXJJbmZvKHVzZXJJbmZvOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbykge1xuICAgIHJlc29sdmVVc2VySW5mbyh1c2VySW5mbylcbiAgfSxcbn0pIl19