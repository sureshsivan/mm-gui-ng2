var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'ENV': JSON.stringify(ENV)
        }
    }),
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
