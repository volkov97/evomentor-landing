import express from 'express';

import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import createDictionary from '../../common/lib/dictionary'

export default ({
    routes, location, reducer, cookies
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

            createDictionary(store, cookies.get('lang'));

            // Styles
            const sheet = new ServerStyleSheet();

            fetchData({ store, location, params, history })
                .then(() => {
                    // Markup
                    const markup = renderToString(sheet.collectStyles(
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    ));

                    // Grab the initial state from our Redux store
                    const finalState = store.getState();

                    // Final Styles
                    const finalCss = sheet.getStyleTags();

                    resolve({ markup, state: finalState, css: finalCss });
                })
                .catch((err) => reject(err));
        });
    });
}
