import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../pages/Root/Root';
import Landing from '../pages/Landing/Landing';
import NotFound from '../pages/NotFound/NotFound';

export default (
    <Route path="/" component={Root}>
      <IndexRoute component={Landing} />
      <Route path="*" component={NotFound} />
    </Route>
);
