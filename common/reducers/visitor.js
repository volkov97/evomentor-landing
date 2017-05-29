import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './entities/projects';

export default combineReducers({
    routing: routerReducer,
    projects
});
