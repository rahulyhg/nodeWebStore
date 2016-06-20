'use strict';

const NODE_ENV = process.env.NODE_ENV || 'pokestars';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const jeet = require('jeet');

module.exports = {
  entry: {
    // mail: "./public/app/Components/mail/mail",
    // services: "./public/app/services/mailapi/mailapi",
    // context: __dirname + '/client',
    app: './client/boot.js',
    vendors: [
      'angular',
      'angular-ui-router']
  },
  output: {
    path: __dirname +'/public',
    // publicPath: '/',
    filename: "[name].js",
    library: '[name]'
  },

  // watch: true,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.css', '.html', '.styl']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.css', '.html', '.styl']
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css')
    // new webpack.ProvidePlugin({
    //   angular: 'angular'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './client/index.html'
    // }),
    // new webpack.DefinePlugin(true)


  ],
  stylus: {
    use:[jeet()]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        // cacheDirectory: true,
        // plugins: ['transform-runtime'],
        presets: ['es2015']
      },
    },
      {test: /\.css$/, loader: 'style-loader!css-loader?resolve url'},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg|gif)$/, loader: 'file?name=[path][name].[ext]'},
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?hash=sha512&digest=hex&name=[path][name].[ext]?[hash]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // }

    ]
  },
  devServer: {
    // hot: true,
    historyApiFallback: true,
    port: 3000
  }

};