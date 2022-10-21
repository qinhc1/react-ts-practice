/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-17 15:44:04
 * @Description:
 */
// 配置参考官网：https://www.npmjs.com/package/@craco/craco#configuration-file
const cracoSassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')

module.export = {
  babel: {
    plugins: [['styled-jsx/babel', { plugins: ['styled-jsx-plugin-sass'] }]],
  },
  plugins: [
    {
      plugin: cracoSassResourcesLoader,
      options: {
        resources: path.resolve(__dirname, 'src/styles/variables.scss'),
      },
    },
  ],
}
