import * as actionTypes from '../actions-types/subscription';

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
            console.log(action);
            return { ...state, data: { [action.payload.name]: action.payload.value } };

        case actionTypes.SUBSCRIBE_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.SUBSCRIBE_SUCCESS:
            return { ...state, message: action.payload, isLoading: false };
        case actionTypes.SUBSCRIBE_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
}
