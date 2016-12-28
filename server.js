/* eslint-disable */

var express = require('express');
var httpProxy = require('http-proxy');

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = express();

var port = 5050;
var devURL = `http://localhost:${port + 1}`;
var apiURL = 'http://localhost:3000';
var publicPath = '/dist'

function proxy(target) {
  return httpProxy.createProxyServer({
    target
  }).on('error', (err) => {
    console.log(`proxy error: ${err}`);
  });
}

var devProxy = proxy(devURL);
var apiProxy = proxy(apiURL);


app.use(publicPath, (req, res) => {
  req.url = publicPath + req.url;
  devProxy.web(req, res);
});

app.use('/api', (req, res) => {
  req.url = `api/${req.url}`;
  apiProxy.web(req, res);
});

app.use('/*', (req, res) => {
  req.url= `/src/index.html`;
  devProxy.web(req, res);
});

config.devtool = 'eval';
config.output.pathinfo = true;
config.output.publicPath = `${publicPath}/`;
new webpackDevServer(webpack(config), {
  quiet: true,
  publicPath: config.output.publicPath,
  stats: {colors: true}
}).listen(port + 1, 'localhost');

app.listen(port, () => {
  console.log(`服务已启动，http://localhost:${port}, ctrl+c 取消 `);
});
