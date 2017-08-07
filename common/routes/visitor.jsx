import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../pages/visitor/Root/Root';
import FeedContainer from '../pages/visitor/Feed/FeedContainer';
import Contacts from '../pages/visitor/Contacts/Contacts';
import NotFound from '../pages/visitor/NotFound/NotFound';

export default (
    <div>
        <Route path='/' component={Root} >
            <IndexRoute component={FeedContainer}/>
            <Route path="condtacts" component={Contacts} />
            <Route path="*" component={NotFound} />
        </Route>
    </div>
);
