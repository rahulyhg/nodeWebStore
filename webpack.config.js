'use strict';

const NODE_ENV = process.env.NODE_ENV || 'pokestars';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // mail: "./public/app/Components/mail/mail",
    // services: "./public/app/services/mailapi/mailapi",
    app: './client/boot.js',
    vendors: [
      'angular',
      'angular-ui-router']
  },
  output: {
    path: __dirname,
    filename: "dist/[name].js",
    library: '[name]'
  },

  // watch: true,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.css', '.html']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.css', '.html']
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.ProvidePlugin({
    //   angular: 'angular'
    // }),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.DefinePlugin(true)


  ],

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
      {test: /\.html$/, loader: 'html'},
      {test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg)$/, loader: 'file?name=[path][name].[ext]?[hash]'}
    ]
  },
  devServer: {
    // hot: true,
    historyApiFallback: true,
    port: 3000
  }

};