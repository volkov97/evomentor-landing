import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import createDictionary  from '../../common/lib/dictionary'

import reducer from '../../common/reducers/index';
import routes from '../../common/routes/index';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const lang = getUrlParameter('lang').length ? getUrlParameter('lang') : undefined;
createDictionary(store, lang);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    </Provider>,
    document.getElementById('root')
);
