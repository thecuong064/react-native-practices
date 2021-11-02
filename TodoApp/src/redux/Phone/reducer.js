import PhoneNumberActionTypes from './constants';

const initalPhoneNumber = '';

const phoneNumberReducer = (state = initalPhoneNumber, action) => {
  const {payload, type} = action;

  switch (type) {
    case PhoneNumberActionTypes.PHONE_NUMBER_ADD_CHAR: {
      let newState = state + payload;
      return newState;
    }
    case PhoneNumberActionTypes.PHONE_NUMBER_DEL_CHAR: {
      if (state.length < 1) {
        return state;
      }
      let newState = state;
      return newState.slice(0, -1);
    }
    case PhoneNumberActionTypes.PHONE_NUMBER_CLEAR: {
      return initalPhoneNumber;
    }
    default:
      return state;
  }
};

export default phoneNumberReducer;
