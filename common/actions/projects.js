import fetch from 'isomorphic-fetch';

import { FETCH_PROJECTS_REQUEST } from '../actions-types/projects';

function fetchProjectsRequest() {
    return {
        type: FETCH_PROJECTS_REQUEST
    }
}

import { FETCH_PROJECTS_SUCCESS } from '../actions-types/projects';

function fetchProjectsSuccess(payload) {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        payload
    }
}

import { FETCH_PROJECTS_FAILURE } from '../actions-types/projects';

function fetchProjectsFailure(payload) {
    return {
        type: FETCH_PROJECTS_FAILURE,
        payload
    }
}

export function handleLoadingProjects() {
    return function (dispatch) {
        dispatch(fetchProjectsRequest());

        return fetch(`http://localhost:3000/api`)
            .then(response => response.json())
            .then(json => dispatch(fetchProjectsSuccess(json)))
            .catch(err => dispatch(fetchProjectsFailure(err)));
    }
}
