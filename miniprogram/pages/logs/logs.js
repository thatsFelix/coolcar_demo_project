"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad() {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map((log) => {
                return {
                    date: util_1.formatTime(new Date(log)),
                    timeStamp: log
                };
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQ0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFDMUQsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLEdBQUc7aUJBQ2YsQ0FBQTtZQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSksXG4gICAgICAgICAgdGltZVN0YW1wOiBsb2dcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=