// import { toastMsg, toastStatus } from '../utils/toast'
import http from 'wechat-http'

// 响应拦截器
http.intercept.response =  (
  (res) => {
    console.log('res', res)
    return res.data
  }
)

export default http
