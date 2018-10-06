import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import App from 'components/App';
import axios from 'axios';
import routes from './routes';

const render = async (ctx) => {
  const { url, origin } = ctx;

  axios.defaults.baseURL = origin;

  const store = configure();
  const promises = [];
  const context = {};

  routes.forEach(route => {
    const match = matchPath(url, route);
    if (!match) return;
    const { component } = route;
    const { preload } = component;
    if (!preload) return;
    const { params } = match;
    const promise = preload(store.dispatch, params);
    promises.push(promise);
  });

  try {
    await Promise.all(promises);
  } catch(e) {

  }


  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );
  
  if (context.NotFound) {
    ctx.status = 404;
  }
  return { html, preloadedState: store.getState() };
}

export default render;