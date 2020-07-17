/**
 * @description webpack 配置，开发环境
 * @author wangfupeng
 */

const path = require('path')
const { merge } = require('webpack-merge')
const CommonConf = require('./webpack.common')

const distPath = path.join(__dirname, '..', 'dist')

module.exports = merge(CommonConf, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: distPath
    },
    devServer: {
        port: 3001,
        progress: true,
        contentBase: distPath,
        open: true,
        compress: true
    }
})
