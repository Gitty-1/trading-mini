// pages/register/register.js
import { toast, iconStatus } from '../../string'
import ShowToast from '../../utils/toast'
import user from '../../api/user/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      username: '',
      password: '',

    },
    validPassword: ''
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
    if (prop === 'validPassword') {
      this.setData({
        validPassword: value
      })
    }
    else {
      this.data.form[prop] = value
      this.setData({
        form: this.data.form
      })
    }
  },
  // 验证表单信息
  validForm() {
    if (this.data.form.username === '' || this.data.form.password === '' || this.data.validPassword === '') {
      ShowToast(toast.userMsgEmpty, iconStatus.none)
      return true
    } else if (this.data.form.password !== this.data.validPassword) {
      ShowToast(toast.twicePasswordWrong, iconStatus.none)
      return true
    }
    return false
  },
  // 处理表单提交
  handleFormSubmit() {
    if (this.validForm()) return
    const data = user.login(this.form)
    console.log(data)
    // if (res.data.code === 200) {
    //   ShowToast(toast.successRegister, iconStatus.success)
    //   setTimeout(() => {
    //     wx.navigateBack()
    //   }, 500)
    // }
    // else {
    //   ShowToast(res.data.message, iconStatus.error)
    // }
  },
})