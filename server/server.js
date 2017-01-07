/* eslint-disable */

const React = require('react');
const express = require('express');
const {renderToStaticMarkup} = require('react-dom/server');
const {match, RouterContext} = require('react-router');
const routes = require('../dist/server/routes.js');

const app = express();
const port = 8080;

app.get('/*', (req, res) => {
  match({routes: routes.default, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(`
        <html>
          <head>
            <title>css参考手册-让你一看就懂的css可视化教程</title>
            <link rel="stylesheet" href="http://www.cssbar.com/styles.css" />
          </head>
          <body>
          ${renderToStaticMarkup(React.createElement(RouterContext, renderProps))}
          </body>
        </html>
      `)
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(port, () => {
  console.log(`服务已启动，http://localhost:${port}`);
})
