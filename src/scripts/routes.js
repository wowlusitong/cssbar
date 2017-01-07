import React from 'react';
import {Route} from 'react-router';

import App from '~/components/App';
import PropertyDetails from '~/components/PropertyDetails';

import PageNotFound from '~/components/PageNotFound';

const routes = [
  <Route key="200" path="/" component={App}>
    <Route path="css/:name" component={PropertyDetails} />
  </Route>,
  <Route key="404" path="*" component={PageNotFound} />
];

export default routes;
