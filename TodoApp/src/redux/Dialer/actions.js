import DialerActionTypes from './constants';

export const addCharToPhoneNumber = payload => ({
  type: DialerActionTypes.DIALER_PHONE_NUMBER_ADD_CHAR,
  payload: payload,
});

export const delCharFromPhoneNumber = () => ({
  type: DialerActionTypes.DIALER_PHONE_NUMBER_DEL_CHAR,
  payload: null,
});

export const clearPhoneNumber = () => ({
  type: DialerActionTypes.DIALER_PHONE_NUMBER_CLEAR,
  payload: null,
});

export const clearPhoneNumber1 = {
  type: DialerActionTypes.DIALER_PHONE_NUMBER_CLEAR,
  payload: null,
};

var handleClick = () => {
  console.log('clicked');
};
