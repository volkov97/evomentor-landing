import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Dashboard from '../pages/admin/Dashboard/Dashboard';
import NotFound from '../pages/admin/NotFound/NotFound';

export const routes = (
    <div>
        <IndexRoute path='/' component={Dashboard} />
        <Route path="*" component={NotFound} />
    </div>
);
