import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'redux-react-i18n'

import subscription from './subscription';

export default combineReducers({
    routing: routerReducer,
    i18n: i18nReducer,
    subscription
});
