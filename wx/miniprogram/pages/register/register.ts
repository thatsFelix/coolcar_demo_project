Page({
  data: {
    licNo: '',
    name: '',
    genderIndex: 0,
    genders: ['未知', '男', '女', '其他'],
    birthDate: '1990-01-01',
    licImgURL: '',
    state: 'UNSUBMITTED' as 'UNSUBMITTED' | 'PENDING' | 'VERIFIED'
  },

  onUploadLic() {
    console.log("onUploadLic");
    
    wx.chooseImage({
      success: async res => {
        console.log("res", res);
        if (res.tempFilePaths.length > 0) {
          this.setData({
            licImgURL: res.tempFilePaths[0],
          })

          setTimeout(() => {
            this.setData({
              licNo: '123898989',
              name: '张三',
              genderIndex: 1
            })
          }, 1000);
        }
      }
    })
  },

  onGenderChange(e: any) {
    this.setData({
        genderIndex: parseInt(e.detail.value),
    })
  },

  onBirthDateChange(e: any) {
    this.setData({
      birthDate: e.detail.value,
    })
  },

  onSubmit() {
    this.setData({
      state: 'PENDING',
    })

    setTimeout(() => {
      this.onLicVerified()
    }, 3000);
  },

  onResubmit() {
    this.setData({
      state: 'UNSUBMITTED',
      licImgURL: '',
    })
  },

  onLicVerified() {
    this.setData({
      state: 'VERIFIED',
    })

    wx.redirectTo({
        url: '/pages/lock/lock',
    })
  }
})