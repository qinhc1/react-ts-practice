/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-20 15:04:43
 * @Description:
 */
import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
