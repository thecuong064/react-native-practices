import {combineReducers} from 'redux';
import imagesReducer from './ApiPracties/reducer';
import userReducer from './common/reducer';
import phoneNumberReducer from './Dialer/reducer';
import typicalListReducer from './TypicalList/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  phoneNumber: phoneNumberReducer,
  typicalList: typicalListReducer,
  images: imagesReducer,
});

export default rootReducer;
