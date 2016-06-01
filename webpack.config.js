/**
 * Created by admin on 01.06.2016.
 */
'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

console.log(__dirname);
module.exports = {
  // context: '',
  entry: {
    app: "./client/app"
  },
  output: {
    // path:'/'
    path: __dirname,
    filename: "public/dist/[name].js",
    library: '[name]'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 300
  },

  devtool: NODE_ENV == 'production' ? "source-map" : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new ngAnnotatePlugin({ add: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //     mangle: {
    //         except: ['$', 'exports', 'require', '$inject', 'import']
    //     }
    // })
    // }})
    // compress: {
    //     warnings: false,
    //     drop_console: true,
    //     // mangle: false
    //     // unsafe: true
    // },
    // mangle: {
    //     except: ['$', 'exports', 'require', '$inject', 'import']
    // }

    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common'
    // })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.css', '.html']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.css', '.html']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        // plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0']
      },
    },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(woff|woff2|ttf|svg|eot)$/, loader: 'url' }
    ]
  }
}

// console.log(new Date.now())

// if (NODE_ENV != 'production') {
//     module.exports.plugins.push(

//     )
// }
