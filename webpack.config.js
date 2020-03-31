const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none', // 为区分环境 关闭压缩 使用插件针对prod环境压缩
    entry: {
        'test-string-diff': './src/index.js',
        'test-string-diff.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'testStringDiff', // 定义打包的库名称
        libraryTarget: 'umd', // 将lib暴漏在所有的模块下使用(AMD,CJS,ES6 import ...)
        libraryExport: 'default' // 定义default 可直接调用，无需使用lib.default
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // 通过该插件可以压缩es6语法，如果用 uglifyjs则不会对es6语法进行压缩 wp4默认使用
                include: /\.min\.js$/,
            })
        ]
    }
}