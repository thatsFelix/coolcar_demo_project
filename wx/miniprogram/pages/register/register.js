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
Page({
    data: {
        licNo: '',
        name: '',
        genderIndex: 0,
        genders: ['未知', '男', '女', '其他'],
        birthDate: '1990-01-01',
        licImgURL: '',
        state: 'UNSUBMITTED'
    },
    onUploadLic: function () {
        var _this = this;
        console.log("onUploadLic");
        wx.chooseImage({
            success: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    console.log("res", res);
                    if (res.tempFilePaths.length > 0) {
                        this.setData({
                            licImgURL: res.tempFilePaths[0],
                        });
                        setTimeout(function () {
                            _this.setData({
                                licNo: '123898989',
                                name: '张三',
                                genderIndex: 1
                            });
                        }, 1000);
                    }
                    return [2];
                });
            }); }
        });
    },
    onGenderChange: function (e) {
        this.setData({
            genderIndex: parseInt(e.detail.value),
        });
    },
    onBirthDateChange: function (e) {
        this.setData({
            birthDate: e.detail.value,
        });
    },
    onSubmit: function () {
        var _this = this;
        this.setData({
            state: 'PENDING',
        });
        setTimeout(function () {
            _this.onLicVerified();
        }, 3000);
    },
    onResubmit: function () {
        this.setData({
            state: 'UNSUBMITTED',
            licImgURL: '',
        });
    },
    onLicVerified: function () {
        this.setData({
            state: 'VERIFIED',
        });
        wx.redirectTo({
            url: '/pages/lock/lock',
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsRUFBRTtRQUNSLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQy9CLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsS0FBSyxFQUFFLGFBQXVEO0tBQy9EO0lBRUQsV0FBVztRQUFYLGlCQXFCQztRQXBCQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDYixPQUFPLEVBQUUsVUFBTSxHQUFHOzs7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7eUJBQ2hDLENBQUMsQ0FBQTt3QkFFRixVQUFVLENBQUM7NEJBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDWCxLQUFLLEVBQUUsV0FBVztnQ0FDbEIsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsV0FBVyxFQUFFLENBQUM7NkJBQ2YsQ0FBQyxDQUFBO3dCQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDVjs7O2lCQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMsRUFBZCxVQUFlLENBQU07UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDeEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlCQUFpQixFQUFqQixVQUFrQixDQUFNO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO1FBQVIsaUJBUUM7UUFQQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQyxDQUFBO1FBRUYsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLFVBQVU7U0FDbEIsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxrQkFBa0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbGljTm86ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGdlbmRlckluZGV4OiAwLFxuICAgIGdlbmRlcnM6IFsn5pyq55+lJywgJ+eUtycsICflpbMnLCAn5YW25LuWJ10sXG4gICAgYmlydGhEYXRlOiAnMTk5MC0wMS0wMScsXG4gICAgbGljSW1nVVJMOiAnJyxcbiAgICBzdGF0ZTogJ1VOU1VCTUlUVEVEJyBhcyAnVU5TVUJNSVRURUQnIHwgJ1BFTkRJTkcnIHwgJ1ZFUklGSUVEJ1xuICB9LFxuXG4gIG9uVXBsb2FkTGljKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25VcGxvYWRMaWNcIik7XG4gICAgXG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgc3VjY2VzczogYXN5bmMgcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcbiAgICAgICAgaWYgKHJlcy50ZW1wRmlsZVBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbGljSW1nVVJMOiByZXMudGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICBsaWNObzogJzEyMzg5ODk4OScsXG4gICAgICAgICAgICAgIG5hbWU6ICflvKDkuIknLFxuICAgICAgICAgICAgICBnZW5kZXJJbmRleDogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25HZW5kZXJDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZ2VuZGVySW5kZXg6IHBhcnNlSW50KGUuZGV0YWlsLnZhbHVlKSxcbiAgICB9KVxuICB9LFxuXG4gIG9uQmlydGhEYXRlQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBiaXJ0aERhdGU6IGUuZGV0YWlsLnZhbHVlLFxuICAgIH0pXG4gIH0sXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHN0YXRlOiAnUEVORElORycsXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkxpY1ZlcmlmaWVkKClcbiAgICB9LCAzMDAwKTtcbiAgfSxcblxuICBvblJlc3VibWl0KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzdGF0ZTogJ1VOU1VCTUlUVEVEJyxcbiAgICAgIGxpY0ltZ1VSTDogJycsXG4gICAgfSlcbiAgfSxcblxuICBvbkxpY1ZlcmlmaWVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzdGF0ZTogJ1ZFUklGSUVEJyxcbiAgICB9KVxuXG4gICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9sb2NrL2xvY2snLFxuICAgIH0pXG4gIH1cbn0pIl19