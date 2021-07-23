// export interface IAppOption {
//     globalData: {
//         userInfo: Promise<WechatMiniprogram.UserInfo>
//     }
//     resolveUserInfo(userInfo: WechatMiniprogram.UserInfo): void
// }

export interface IAppOption {
    globalData: {
      userInfo?: WechatMiniprogram.UserInfo,
    }
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}