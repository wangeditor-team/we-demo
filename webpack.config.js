/**
 * @description webpack 通用配置
 * @author wangfupeng
 */

const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = {
    mode: 'development',
    entry: path.join(srcPath, 'index.js'),
    output: {
        filename: 'main.js',
        path: distPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
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
    },
    devServer: {
        port: 3001,
        progress: true,
        contentBase: distPath,
        open: true,
        compress: true
    }
}
