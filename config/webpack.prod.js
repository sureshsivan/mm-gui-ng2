var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[id].chunk.js',
    sourceMapFilename: '[file].map'
  }

    // htmlLoader: {
    //     minimize: false // workaround for ng2
    // },

    // plugins: [
    //     // new webpack.NoErrorsPlugin(),
    //     // new webpack.optimize.DedupePlugin(),
    //     // new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
    //     //     mangle: {
    //     //         keep_fnames: true
    //     //     }
    //     // }),
    //     // new ExtractTextPlugin('[name].[hash].css'),
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             'ENV': JSON.stringify(ENV)
    //         }
    //     }),
    //     new CopyWebpackPlugin([{
    //         from: 'public/favicon.ico',
    //         to: helpers.root(BUILD_FOLDER_NAME)
    //     }, {
    //         from: 'public/site-error.html',
    //         to: helpers.root(BUILD_FOLDER_NAME)
    //     }])
    // ]
});
