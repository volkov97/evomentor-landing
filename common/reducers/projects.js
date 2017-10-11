import * as actionTypes from '../actions-types/projects';

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

export default function projects(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}