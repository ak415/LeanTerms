var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './front-end/app.jsx',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env','react','es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
