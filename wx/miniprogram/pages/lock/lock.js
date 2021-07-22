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
var routing_1 = require("../../utils/routing");
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
                        url: routing_1.routing.driving({
                            trip_id: "tripId123"
                        }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBNkM7QUFFN0MsSUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQTtBQUV6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsRUFBRTtRQUNiLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBRUssTUFBTSxFQUFaOzs7Ozs0QkFDbUIsV0FBTSxNQUFNLEVBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFBOzt3QkFBekQsUUFBUSxHQUFHLFNBQThDO3dCQUUvRCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFNBQVMsRUFBRSxRQUFRLENBQUMsU0FBUzs0QkFDN0IsYUFBYSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLO3lCQUM1RCxDQUFDLENBQUE7Ozs7O0tBQ0g7SUFFRCxhQUFhLEVBQWIsVUFBYyxDQUFNO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0IsSUFBTSxRQUFRLEdBQStCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzlELElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxFQUFjLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsYUFBYSxFQUFFLElBQUk7YUFDdEIsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUMxQztJQUNILENBQUM7SUFFRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBTTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUN4QyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVELFdBQVc7UUFBWCxpQkFvQ0M7UUFuQ0MsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtvQkFDMUIsUUFBUSxFQUFFO3dCQUNSLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUU5RCxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDYixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUE7Z0JBRUYsVUFBVSxDQUFDO29CQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLGlCQUFPLENBQUMsT0FBTyxDQUFDOzRCQUNuQixPQUFPLEVBQUUsV0FBVzt5QkFDckIsQ0FBQzt3QkFDRixRQUFRLEVBQUUsVUFBQSxDQUFDOzRCQUNULEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTt3QkFDbEIsQ0FBQztxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLENBQUM7Z0JBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsYUFBYTtpQkFDckIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXBwT3B0aW9uIH0gZnJvbSBcIi4uLy4uL2FwcG9wdGlvblwiXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRpbmdcIlxuXG5jb25zdCBzaGFyZUxvY2F0aW9uS2V5ID0gXCJzaGFyZV9sb2NhdGlvblwiXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYXZhdGFyVVJMOiAnJyxcbiAgICBzaGFyZUxvY2F0aW9uOiBmYWxzZVxuICB9LFxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IGdldEFwcDxJQXBwT3B0aW9uPigpLmdsb2JhbERhdGEudXNlckluZm9cbiAgICBcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYXZhdGFyVVJMOiB1c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICBzaGFyZUxvY2F0aW9uOiB3eC5nZXRTdG9yYWdlU3luYyhzaGFyZUxvY2F0aW9uS2V5KSB8fCBmYWxzZSxcbiAgICB9KVxuICB9LFxuXG4gIG9uR2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJvbkdldFVzZXJJbmZvXCIpO1xuICAgIFxuICAgIGNvbnN0IHVzZXJJbmZvOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICBnZXRBcHA8SUFwcE9wdGlvbj4oKS5yZXNvbHZlVXNlckluZm8odXNlckluZm8pXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHNoYXJlTG9jYXRpb246IHRydWUsXG4gICAgICB9KVxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoc2hhcmVMb2NhdGlvbktleSwgdHJ1ZSlcbiAgICB9XG4gIH0sXG4gIFxuICBvblNoYXJlTG9jYXRpb24oZTogYW55KSB7XG4gICAgdGhpcy5kYXRhLnNoYXJlTG9jYXRpb24gPSBlLmRldGFpbC52YWx1ZVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKHNoYXJlTG9jYXRpb25LZXksIHRoaXMuZGF0YS5zaGFyZUxvY2F0aW9uKVxuICB9LFxuXG4gIG9uVW5sb2NrVGFwKCkge1xuICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgIHR5cGU6IFwiZ2NqMDJcIixcbiAgICAgIHN1Y2Nlc3M6IGxvYyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnQgYSB0cmlwXCIsIHtcbiAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IGxvYy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbG9jLmxvbmdpdHVkZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF2YXRhclVSTDogdGhpcy5kYXRhLnNoYXJlTG9jYXRpb24gPyB0aGlzLmRhdGEuYXZhdGFyVVJMIDogJycsXG4gICAgICAgICAgLy8gY2FySUQ6ICcnLFxuICAgICAgICB9KTtcblxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6IFwi5byA6ZSB5LitXCIsXG4gICAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6IHJvdXRpbmcuZHJpdmluZyh7XG4gICAgICAgICAgICAgIHRyaXBfaWQ6IFwidHJpcElkMTIzXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29tcGxldGU6IF8gPT4ge1xuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9LFxuICAgICAgZmFpbDogXyA9PiB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIHRpdGxlOiAn6K+36YeN5paw6K6+572u5o6I5p2D5L2N572u5L+h5oGvJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KSJdfQ==