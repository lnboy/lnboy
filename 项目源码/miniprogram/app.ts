// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    wx.cloud.init({
        env:'test-9gkz1ih31123bbb4',
        traceUser:true
    })
  },
})