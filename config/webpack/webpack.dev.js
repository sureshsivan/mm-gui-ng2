var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./../helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new CopyWebpackPlugin([{
        from: 'public/favicon.ico',
        to: helpers.root('dist')
    }, {
        from: 'public/site-error.html',
        to: helpers.root('dist')
    }]),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
});
