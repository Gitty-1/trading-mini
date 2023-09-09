const ShowToast = (toastMsg: string, toastStatus: "success" |  "loading" | "none" | undefined) => {
  wx.showToast({
    title: toastMsg,
    icon: toastStatus
  })
}

export default ShowToast