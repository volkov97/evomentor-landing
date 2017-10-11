import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../pages/Root/Root';
import NotFound from '../pages/NotFound/NotFound';

export default (
    <Route path="/">
      <IndexRoute component={Root} />
      <Route path="*" component={NotFound} />
    </Route>
);
