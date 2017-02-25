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
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
    {
      test: /\.ts$/,
      loaders: [{
        loader: 'awesome-typescript-loader',
        options: { configFileName: helpers.root('src', 'tsconfig.json') }
      }, 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      loaders: ['html-loader']
    },
    {
      test: /\.scss$/,
      use: appCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
      include: [helpers.root('src', 'app', 'themes')]
    },
    {
      test: /\.scss$/,
      use:  ['raw-loader', 'sass-loader'],
      include: [helpers.root('src', 'app', 'components')]
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    }
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
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
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
