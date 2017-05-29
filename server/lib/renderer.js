import express from 'express';

import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

export default ({
    routes, location, reducer
}) => {
    return new Promise((resolve, reject) => {
        match({ routes, location }, (err, redirectLocation, renderProps) => {
            if (redirectLocation) {
                resolve({ redirect: redirectLocation.pathname + redirectLocation.search });
            }

            if (err) {
                reject(err);
            }

            const component = renderProps.components[renderProps.components.length - 1].WrappedComponent;
            const fetchData = (component && component.fetchData) || (() => Promise.resolve());
            const { location, params, history } = renderProps;

            // Create a new Redux store instance
            const initialState = {};
            const store = createStore(
                reducer,
                initialState,
                applyMiddleware(thunk)
            );

            fetchData({ store, location, params, history })
                .then(() => {
                    const markup = renderToString(
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    );

                    // Grab the initial state from our Redux store
                    const finalState = store.getState();

                    resolve({ markup, state: finalState });
                })
                .catch((err) => reject(err));
        });
    });
}
