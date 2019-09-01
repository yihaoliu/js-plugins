const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');



module.exports = merge(common, {
    plugins: [
      new UglifyJSPlugin({test: /\.js($|\?)/i})
    ]
})

