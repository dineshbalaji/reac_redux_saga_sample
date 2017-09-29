var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var _root = path.resolve(__dirname, '.');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

module.exports = {
  devtool: null,
  entry:  {
    'app': './src/bootscrap.js'
    /*'app':'./testRun/routeTest.js'*/
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', "syntax-function-bind"],
        }
      }
    ]
  },
  output: {
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
    
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devtool: 'source-map',
  devServer: {
    /*
    * historyAPiFallback is important when we are using react-router with browseHistory  route.
    * this flag is serve  index.html when unknown url requested (ex: 404 status)
    * */
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.DedupePlugin()
  ],
};
