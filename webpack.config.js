const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html'
  //   })
  // ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // port: 8080,
    publicPath: '/dist/'
    // hotOnly: true
  }
};
