/* eslint-disable */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProducet = process.env.NODE_ENV;

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/scripts/main.js', './src/styles/main.scss']
  },
  output: {
    path: `${__dirname}/dist/assets`,
    filename: 'bundle.js',
    publicPath: isProducet ? '/' : '/dist'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)($|\?)/, loader: 'file-loader'},
      {
        test: /\.scss$/,
        loader: isProducet ? ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader'
        }) : 'style-loader!css-loader!postcss-loader!sass-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'asd'
    })
  ]
};
