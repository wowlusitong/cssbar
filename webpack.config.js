/* eslint-disable */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProducet = process.env.NODE_ENV;

const basePath = path.resolve(__dirname, 'src')
module.exports = {
  entry: {
    main: ['./src/scripts/main.js', './src/styles/main.scss']
  },
  output: {
    path: `${__dirname}/dist/assets`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.json$/, use: ['json-loader']},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)($|\?)/, use: ['file-loader']},
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      '~': `${basePath}/scripts`,
      '@images': `${basePath}/images`
    }
  },
  devServer: {
    quiet: true,
    hot: true,
    open: true,
    historyApiFallback: true
  }
};
