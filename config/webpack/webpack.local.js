var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./../helpers');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('local')
      }
    })
  ]
});
