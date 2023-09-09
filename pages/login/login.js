// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      username: '',
      password: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 双向绑定
  changeAccount(e) {
    let prop = e.currentTarget.dataset.prop
    let value = e.detail.value
    this.data.form[prop] = value
    this.setData({
      form: this.data.form
    })
  },
  // 验证表单信息
  validForm() {
    if(this.data.form.username === '' || this.data.form.password === '') {
      wx.showToast({
        title: '表单信息不能为空',
        icon: 'none'
      })
      return true
    } 
    return false
  },
  // 处理表单提交
  handleFormSubmit() {
    if(this.validForm()) return
    wx.request({
      url: 'http://10.125.139.70:8080/login',
      method: 'POST',
      data: this.data.form,
      success: (res) => {
        if(res.data.code !== 200) {
          wx.showToast({
            title: res.data.message,
            icon: 'error'
          })
        }
        console.log(res)
      }
    })
  },
  // 前往注册页面
  gotoRegister() {
    wx.navigateTo({
      url: '/pages/register/register'
    })
  }
})