module.exports = {
  entry: {
    main: ['./src/scripts/main.js', './src/styles/main.scss']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)($|\?)/, loader: 'file-loader'}
    ]
  }
};
