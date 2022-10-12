/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-09-19 16:55:30
 * @Description:
 */
const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  (config) => {
    config.devtool =
      config.mode === 'development' ? 'cheap-module-source-map' : false
    return config
  },

  // @别名
  addWebpackAlias({
    '@': path.resolve('./src'),
  }),

  // scss全局变量
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/assets/scss/varable.scss'],
        },
      },
    ],
  })
)
