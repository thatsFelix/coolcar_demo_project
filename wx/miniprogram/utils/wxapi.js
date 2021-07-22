"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = exports.getSetting = void 0;
function getSetting() {
    return new Promise(function (resolve, reject) {
        wx.getSetting({
            success: resolve,
            fail: reject,
        });
    });
}
exports.getSetting = getSetting;
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        wx.getUserInfo({
            success: resolve,
            fail: reject,
        });
    });
}
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3hhcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3eGFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixVQUFVO0lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFQSCxnQ0FPRztBQUVILFNBQWdCLFdBQVc7SUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVBILGtDQU9HIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmcoKTogUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5HZXRTZXR0aW5nU3VjY2Vzc0NhbGxiYWNrUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiByZWplY3QsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckluZm8oKTogUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IHJlamVjdCxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSJdfQ==