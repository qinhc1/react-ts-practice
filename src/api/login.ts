/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-18 14:09:46
 * @Description:
 */

import { AxiosPromise } from 'axios'
import request from './api'

type ApiNames = 'login' | 'foo' | 'bar'
type Api = Record<ApiNames, (data: object) => AxiosPromise<any>>

export function login(data: object) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  })
}

// 获取账号列表
export function systemUserSearch(data: { page: number; size: number }) {
  return request({
    url: `/program/search/${data.page}/${data.size}`,
    method: 'post',
    data,
  })
}
