//~!    webpack.config.js

var path = require('path');
var webpack = require( 'webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/entry.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'report-bundle.js',
      publicPath: '/assets'
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: [
          'html?{"minimize":false}',
          path.join(__dirname, 'dev/markdownLoader')
        ].join('!')
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, "src")
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          [
            'css-loader',
            path.join(__dirname, '../build_helpers/cssTransformLoader')
          ].join('!')
        )
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!less-loader'
        )
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        query: { mimetype: 'image/png', name: 'images/[name]-[hash].[ext]' }
      }
    ]
  },
  resolve: {
    alias: {
      'fixed-data-table/css': path.join(__dirname, '../src/css'),
      'fixed-data-table': path.join(__dirname, '../src/FixedDataTableRoot')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Report Bundle'
    }),
    new CopyWebpackPlugin([
      {
        from: 'dev/resources/.jshintrc',
        to: './',
        toType: 'dir'
      }
    ])
  ]
};