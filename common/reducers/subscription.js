import * as actionTypes from '../actions-types/subscription';
import ym from 'react-yandex-metrika';

const initialState = {
    data: {
        email: '',
    },
    isLoading: false,
    message: null,
    error: null
};

export default function subscription(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_EMAIL_FIELD:
            return { ...state, data: { [action.payload.name]: action.payload.value } };

        case actionTypes.SUBSCRIBE_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.SUBSCRIBE_SUCCESS:
            ym('reachGoal', 'subscribe_success');
            return { ...state, message: action.payload, isLoading: false, error: null };
        case actionTypes.SUBSCRIBE_FAILURE:
            ym('reachGoal', 'subscribe_failure');
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}
