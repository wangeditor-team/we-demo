/**
 * @description webpack 配置，生产环境
 * @author wangfupeng
 */

const path = require('path')
const { merge } = require('webpack-merge')
const CommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const distPath = path.join(__dirname, '..', 'dist')

module.exports = merge(CommonConf, {
    mode: 'production',
    output: {
        filename: 'main.min.js',
        path: distPath,
    },
    plugins: [new CleanWebpackPlugin()],
})
