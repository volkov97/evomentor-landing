import axios from 'axios';

import {
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILURE,
  CHANGE_EMAIL_FIELD,
} from '../actions-types/subscription';

export const handleFieldChange = (e) => ({
  type: CHANGE_EMAIL_FIELD,
  payload: {
    name: e.target.name,
    value: e.target.value,
  },
});

const subscribeRequest = () => ({ type: SUBSCRIBE_REQUEST });
const subscribeSuccess = (payload) => ({ type: SUBSCRIBE_SUCCESS, payload });
const subscribeFailure = (payload) => ({ type: SUBSCRIBE_FAILURE, payload });

export const handleSubscribe = (email) => {
  return (dispatch) => {
    dispatch(subscribeRequest());

    return axios({
      method: 'POST',
      url: 'http://api.evomentor.com/guests',
      data: { email }
    }).then(json => dispatch(subscribeSuccess(json)))
      .catch(err => dispatch(subscribeFailure(err)));
  }
}
