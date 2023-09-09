import http from "../../utils/request";

const BASEURL = {
  protocol: 'http',
  ip: '10.125.139.70',
  port: '8080',
}

const user = {
  // 修改用户资产
  updateUserAssets: (uid: string, token: string) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/queryUserInfo?uid=${uid}`,
    header: {token},
    method: 'GET',
  }),

  // 登录
  login: (data: any) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/login`,
    method: 'POST',
    data,
  }),

  // 注册
  register: (data: any) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/register`,
    method: 'POST',
    data,
  }),

  // 修改用户信息
  updateUserMsg: (data: any, token: string) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/updateUser`,
    header: { token },
    method: 'POST',
    data,
  }),

  // 查用户资金股份
  queryPositionsByUid: (uid: string, token: string) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/queryPositionsByUid?uid=${uid}`,
    header: { token },
    method: 'GET',
  }),

  // 查询用户某只股票持仓信息
  queryPositions: (uid: string, stockCode: string, token: string) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/queryPositionsByUidAndCode?uid=${uid}&code=${stockCode}`,
    header: { token },
    method: 'GET',
  }),

  // 验证用户是否已登录
  validLogin: (token: string) => http({
    url: `${BASEURL.protocol}://${BASEURL.ip}:${BASEURL.port}/verify`,
    header: { token },
    method: 'POST',
  }),
}

export default user
