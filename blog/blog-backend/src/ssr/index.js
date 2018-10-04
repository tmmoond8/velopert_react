// require('browser-env')();
const render = require('./render').default;
const manifest = require('../../../blog-frontend/build/asset-manifest.json');

function buildHTML(rendered) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>React App</title>
    <link href="${manifest['main.css']}" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${rendered}</div>
    <!--<script type="text/javascript" src="${manifest['main.js']}"></script>-->
  </body>
  </html>
  `;
}

module.exports = async (ctx) => {
  const rendered = render(ctx);
  ctx.body = buildHTML(rendered); // 임시 코드
};
