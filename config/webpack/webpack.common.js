const path = require('path');
var { NoEmitOnErrorsPlugin, LoaderOptionsPlugin, ProvidePlugin, ContextReplacementPlugin } = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { CommonsChunkPlugin, UglifyJsPlugin, DedupePlugin } = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const vendorCssExtractPlugin = new ExtractTextPlugin('vendor_custom.[hash].css');
// const appCssExtractPlugin = new ExtractTextPlugin('app.[hash].css');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const helpers = require('./../helpers');
const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "vendor", "bootstrap", "fa", "app"];

// const VENDOR_JS_LIBS = ["jquery", ""];

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',    // for all polyfill browser compatibilities
    'app': './src/main.ts',                // actual source code
    'fa': `font-awesome-sass-loader!${__dirname}/../font-awesome/font-awesome.config.js`,    // for font-awesome
    'bootstrap': `bootstrap-loader/lib/bootstrap.loader?configFilePath=${__dirname}/../bootstrap/bootstraprc.config.yaml!bootstrap-loader/no-op.js`   // for bootstrap
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
        // test: /\.ts$/,
        // loader: '@ngtools/webpack',
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: helpers.root('src', 'tsconfig.json') }
        }, 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
      //   "enforce": "pre",
      //   "test": /\.js$/,
      //   "loader": "source-map-loader",
      //   "exclude": [
      //     /\/node_modules\//
      //   ]
      // }, {
        test: /\.html$/,
        use: ['html-loader']
      }, {
        test: /\.scss$|\.sass$/,    //  all application sass files
        use: ['raw-loader', 'sass-loader'],
        include: [helpers.root('src', 'app', 'app.component.scss'), helpers.root('src', 'app', 'modules')]
      }, {
        test: /\.scss$|\.sass$/,    //  all NON application sass files
        use: ['raw-loader', 'sass-loader'],
        // use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
        exclude: [helpers.root('src', 'app', 'app.component.scss'), helpers.root('src', 'app', 'modules')]
      }, {
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
        use: 'imports-loader?jQuery=jquery'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&name=assets/[name].[hash].[ext]&mimetype=application/font-woff"
      }, {
        test: /\.(jpe?g|gif|ico|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader?name=assets/[name].[hash].[ext]"
    }]
  },

  plugins: [
    // new ContextReplacementPlugin(
    //   // The (\\|\/) piece accounts for path separators in *nix and Windows
    //   /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    //   helpers.root('./src'), // location of your src
    //   {} // a map of your routes
    // ),
    // new AotPlugin({
    //   tsConfigPath: 'src/tsconfig.ngt.json',
    //   entryModule: 'src/app/app.module.ts'
    // }),
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
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
    }),
    new ProgressPlugin(),
    new ExtractTextPlugin('vendor.[hash].css'),
    new LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ]
      }
    })
  ]
};
