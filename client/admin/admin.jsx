import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducer from '../../common/reducers/admin';
import routes from '../../common/routes/admin';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    </Provider>,
    document.getElementById('root')
);
