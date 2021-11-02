import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import phoneNumberReducer from './Phone/reducer';
import typicalListReducer from './TypicalList/reducer';

('./TypicalList/reducer');

const rootReducer = combineReducers({
  user: userReducer,
  phoneNumber: phoneNumberReducer,
  typicalList: typicalListReducer,
});

export default rootReducer;
