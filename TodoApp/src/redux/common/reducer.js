import Types from './constants';

const initalUser = {
  name: '',
  pass: '',
};

const userReducer = (state = initalUser, action) => {
  const {payload, type} = action;

  switch (type) {
    case Types.USER_CHANGE: {
      console;
      return payload;
    }
    default:
      return state;
  }
};

export default userReducer;
