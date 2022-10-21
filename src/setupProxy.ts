/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-18 14:08:32
 * @Description:
 */
export const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app: { use: (arg0: any) => void }) {
  app.use(
    createProxyMiddleware('/street-commander', {
      target: 'http://101.34.254.244:9992', // 开发
      // target: 'http://8.136.83.212:9995', // 测试
      // target: 'http://47.98.196.109:9995',// 生产
      secure: false,
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值,为true时，与服务器同域
      pathRewrite: {
        '^/street-commander': '/street-commander',
      },
    })
  )
}
