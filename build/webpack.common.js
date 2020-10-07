/**
 * @description webpack 通用配置
 * @author wangfupeng
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')

// 获取 wangeditor 的版本号
const packageJSON = require('../package.json')
const v = packageJSON.dependencies['wangeditor']

module.exports = {
    entry: path.join(srcPath, 'index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(v)
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
        ]
    }
}
