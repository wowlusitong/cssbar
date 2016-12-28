import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '~/components/App';
import PageNotFound from '~/components/PageNotFound';

const routes = [
  <Route key="200" path="/" component={App}>
    <Route path="property">
      <IndexRoute component={App} />
      <Route path=":name" />
    </Route>
  </Route>,
  <Route key="404" path="*" component={PageNotFound} />
];

export default routes;
