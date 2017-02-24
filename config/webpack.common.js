var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const vendorCssExtractPlugin = new ExtractTextPlugin('vendor.[hash].css');
const appCssExtractPlugin = new ExtractTextPlugin('app.[hash].css');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',    // for all polyfill browser compatibilities
    'vendor': './src/vendor.ts',          // all vendor files
    'app': './src/main.ts'                // actual source code
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[id].chunk.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
    { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
    { test: /\.html$/, loaders: ['html-loader']},
    { test: /\.css$/, use:  vendorCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader']}), include: /node_modules/},
    { test: /\.scss$/, use: vendorCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}), include: /node_modules/},
    { test: /\.css$/, use:  appCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader']}), exclude: /node_modules/},
    { test: /\.scss$/, use: appCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}), exclude: /node_modules/},
    { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' }
    //   {
    // test: /\.html$/,
    // loader: 'html'
    // },
    // {
    // test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    // loader: 'file?name=assets/[name].[hash].[ext]'
    // },
    // {
    // test: /\.css$/,
    // exclude: helpers.root('src', 'app'),
    // loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    // },
    // {
    // test: /\.css$/,
    // include: helpers.root('src', 'app'),
    // loader: 'raw'
    // }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    vendorCssExtractPlugin,
    appCssExtractPlugin
  ]
};
