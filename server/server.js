/* eslint-disable */

const express = require('express');
const React = require('react');
const {renderToStaticMarkup, renderToString} = require('react-dom/server');
const {match, RouterContext} = require('react-router');

const isProducet = process.env.NODE_ENV;

const {routes, reactHelmet} = require(isProducet ? './index.js' : '../dist/server/index.js').default;

const app = express();
const port = 8080;

function renderHeadToString(head) {
  const regexp = / data-react-helmet="true"/g;
  const title = head.title.toString().replace(regexp, '');
  const meta = head.meta.toString().replace(regexp, '');
  const link = head.link.toString().replace(regexp, '');
  return title + meta + link;
}

app.get('/*', (req, res) => {
  match({routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = renderToStaticMarkup(React.createElement(RouterContext, renderProps));
      const head = reactHelmet.rewind();
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            ${renderHeadToString(head)}
          </head>
          <body>
            ${body}
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
