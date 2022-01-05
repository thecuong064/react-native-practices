import {all, fork, takeLatest} from 'redux-saga/effects';
import ApiActionTypes from '../ApiPracties/constants';
import ApiPractiesSagas, {getImagesAsync} from '../ApiPracties/sagas';

export default function* rootSaga() {
  yield takeLatest(ApiActionTypes.GET_IMAGES, getImagesAsync);
}
