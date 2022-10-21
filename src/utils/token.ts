/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-18 14:17:06
 * @Description:
 */
const TokenKey = 'token'

type token = string
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: token) {
  localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
