import PhoneActionTypes from './constants';

export const addCharToPhoneNumber = payload => ({
  type: PhoneActionTypes.PHONE_NUMBER_ADD_CHAR,
  payload: payload,
});

export const delCharFromPhoneNumber = () => ({
  type: PhoneActionTypes.PHONE_NUMBER_DEL_CHAR,
  payload: null,
});

export const clearPhoneNumber = () => ({
  type: PhoneActionTypes.PHONE_NUMBER_CLEAR,
  payload: null,
});
