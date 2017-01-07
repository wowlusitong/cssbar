import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Router, browserHistory} from 'react-router';

import routes from '~/routes';

//export default renderToStaticMarkup(<Router history={browserHistory}>{routes}</Router>);
export default routes;
