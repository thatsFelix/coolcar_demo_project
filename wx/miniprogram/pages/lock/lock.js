"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var shareLocationKey = "share_location";
Page({
    data: {
        avatarURL: '',
        shareLocation: false
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getApp().globalData.userInfo];
                    case 1:
                        userInfo = _a.sent();
                        this.setData({
                            avatarURL: userInfo.avatarUrl,
                            shareLocation: wx.getStorageSync(shareLocationKey) || false,
                        });
                        return [2];
                }
            });
        });
    },
    onGetUserInfo: function (e) {
        console.log("onGetUserInfo");
        var userInfo = e.detail.userInfo;
        if (userInfo) {
            getApp().resolveUserInfo(userInfo);
            this.setData({
                shareLocation: true,
            });
            wx.setStorageSync(shareLocationKey, true);
        }
    },
    onShareLocation: function (e) {
        this.data.shareLocation = e.detail.value;
        wx.setStorageSync(shareLocationKey, this.data.shareLocation);
    },
    onUnlockTap: function () {
        var _this = this;
        wx.getLocation({
            type: "gcj02",
            success: function (loc) {
                console.log("start a trip", {
                    location: {
                        latitude: loc.latitude,
                        longitude: loc.longitude,
                    },
                    avatarURL: _this.data.shareLocation ? _this.data.avatarURL : '',
                });
                wx.showLoading({
                    title: "开锁中",
                    mask: true,
                });
                setTimeout(function () {
                    wx.redirectTo({
                        url: "/pages/driving/driving",
                        complete: function (_) {
                            wx.hideLoading();
                        }
                    });
                }, 2000);
            },
            fail: function (_) {
                wx.showToast({
                    icon: 'none',
                    title: '请重新设置授权位置信息',
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO0FBRXpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFNBQVMsRUFBRSxFQUFFO1FBQ2IsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFFSyxNQUFNLEVBQVo7Ozs7OzRCQUNtQixXQUFNLE1BQU0sRUFBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUE7O3dCQUF6RCxRQUFRLEdBQUcsU0FBOEM7d0JBRS9ELElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTOzRCQUM3QixhQUFhLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUs7eUJBQzVELENBQUMsQ0FBQTs7Ozs7S0FDSDtJQUVELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3QixJQUFNLFFBQVEsR0FBK0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDOUQsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEVBQWMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxhQUFhLEVBQUUsSUFBSTthQUN0QixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO1NBQzFDO0lBQ0gsQ0FBQztJQUVELGVBQWUsRUFBZixVQUFnQixDQUFNO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ3hDLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsV0FBVztRQUFYLGlCQWtDQztRQWpDQyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO29CQUMxQixRQUFRLEVBQUU7d0JBQ1IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7cUJBQ3pCO29CQUNELFNBQVMsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBRTlELENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUNiLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQTtnQkFFRixVQUFVLENBQUM7b0JBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixHQUFHLEVBQUUsd0JBQXdCO3dCQUM3QixRQUFRLEVBQUUsVUFBQSxDQUFDOzRCQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTt3QkFDbEIsQ0FBQztxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLENBQUM7Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsYUFBYTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXBwT3B0aW9uIH0gZnJvbSBcIi4uLy4uL2FwcG9wdGlvblwiXG5cbmNvbnN0IHNoYXJlTG9jYXRpb25LZXkgPSBcInNoYXJlX2xvY2F0aW9uXCJcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhdmF0YXJVUkw6ICcnLFxuICAgIHNoYXJlTG9jYXRpb246IGZhbHNlXG4gIH0sXG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgZ2V0QXBwPElBcHBPcHRpb24+KCkuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIFxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhdmF0YXJVUkw6IHVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgIHNoYXJlTG9jYXRpb246IHd4LmdldFN0b3JhZ2VTeW5jKHNoYXJlTG9jYXRpb25LZXkpIHx8IGZhbHNlLFxuICAgIH0pXG4gIH0sXG5cbiAgb25HZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uR2V0VXNlckluZm9cIik7XG4gICAgXG4gICAgY29uc3QgdXNlckluZm86IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIGdldEFwcDxJQXBwT3B0aW9uPigpLnJlc29sdmVVc2VySW5mbyh1c2VySW5mbylcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2hhcmVMb2NhdGlvbjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhzaGFyZUxvY2F0aW9uS2V5LCB0cnVlKVxuICAgIH1cbiAgfSxcbiAgXG4gIG9uU2hhcmVMb2NhdGlvbihlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEuc2hhcmVMb2NhdGlvbiA9IGUuZGV0YWlsLnZhbHVlXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoc2hhcmVMb2NhdGlvbktleSwgdGhpcy5kYXRhLnNoYXJlTG9jYXRpb24pXG4gIH0sXG5cbiAgb25VbmxvY2tUYXAoKSB7XG4gICAgd3guZ2V0TG9jYXRpb24oe1xuICAgICAgdHlwZTogXCJnY2owMlwiLFxuICAgICAgc3VjY2VzczogbG9jID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBhIHRyaXBcIiwge1xuICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbG9jLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb2MubG9uZ2l0dWRlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXZhdGFyVVJMOiB0aGlzLmRhdGEuc2hhcmVMb2NhdGlvbiA/IHRoaXMuZGF0YS5hdmF0YXJVUkwgOiAnJyxcbiAgICAgICAgICAvLyBjYXJJRDogJycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogXCLlvIDplIHkuK1cIixcbiAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogXCIvcGFnZXMvZHJpdmluZy9kcml2aW5nXCIsXG4gICAgICAgICAgICBjb21wbGV0ZTogXyA9PiB7XG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBfID0+IHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgdGl0bGU6ICfor7fph43mlrDorr7nva7mjojmnYPkvY3nva7kv6Hmga8nLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pIl19