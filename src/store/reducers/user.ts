/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-19 16:50:27
 * @Description:
 */
import { SET_USER } from '../constant'

interface IAction {
  type: string;
  data: any;
}
//初始化登录用户信息
const initState = null

export default function reducer(preState = initState, action: IAction) {
  const { type, data } = action
  switch (type) {
    case SET_USER:
      return data
    default:
      return preState
  }
}
