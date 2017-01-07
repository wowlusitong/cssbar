/* eslint-disable */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/scripts/routes.js',
  target: 'node',
  output: {
    path: `${__dirname}/dist/server`,
    filename: 'routes.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)($|\?)/, loader: 'file-loader'},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader'
        })
      }
    ]
  }
};
