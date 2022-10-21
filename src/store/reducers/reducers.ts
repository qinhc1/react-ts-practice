/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-19 16:49:41
 * @Description:
 */
import { combineReducers } from 'redux'
import user from './user'
import reduce from './reduce'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
  user,
  reduce,
})
