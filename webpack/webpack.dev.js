const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js');
const merge = require('webpack-merge');



module.exports = merge(common, {
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
    ]
})

