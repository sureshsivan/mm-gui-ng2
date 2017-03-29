const path = require('path');
var { NoEmitOnErrorsPlugin, LoaderOptionsPlugin, ProvidePlugin, ContextReplacementPlugin } = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { CommonsChunkPlugin } = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendorCssExtractPlugin = new ExtractTextPlugin('vendor_custom.[hash].css');
const appCssExtractPlugin = new ExtractTextPlugin('app.[hash].css');

const helpers = require('./helpers');
const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "vendor","app"];

// const VENDOR_JS_LIBS = ["jquery", ""];

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',    // for all polyfill browser compatibilities
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
    rules: [{
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: helpers.root('src', 'tsconfig.json') }
        }, 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.html$/,
        loaders: ['html-loader']
      }, {
        test: /\.scss$|\.sass$/,    //  all application sass files
        use: ['raw-loader', 'css-loader', 'sass-loader'],
        include: [helpers.root('src', 'app', 'app.component.scss'), helpers.root('src', 'app', 'modules')]
      }, {
        test: /\.scss$|\.sass$/,    // all vendor sass files and theme level overrides
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
        include: [helpers.root('src', 'themes')]
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
    }]
  },

  plugins: [
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
    new CommonsChunkPlugin({
      name: "inline",
      minChunks: null
    }),
    new CommonsChunkPlugin({
      "name": "vendor",
      "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
      "chunks": [
        "app"
      ]
    }),
    new HtmlWebpackPlugin({
      "template": 'src/index.html',
      "hash": false,
      "inject": true,
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": "all",
      "excludeChunks": [],
      "title": "Webpack App",
      "xhtml": true,
      "chunksSortMode": function sort(left, right) {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightindex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightindex) {
          return 1;
        }
        else if (leftIndex < rightindex) {
          return -1;
        }
        else {
          return 0;
        }
      }
    }),
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ProgressPlugin(),
    new ExtractTextPlugin('vendor.[hash].css')
  ]
};
