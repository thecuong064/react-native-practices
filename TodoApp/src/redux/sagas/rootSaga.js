import {all, fork, takeLatest} from 'redux-saga/effects';
import ApiPractiesSagas from '../ApiPracties/sagas';

export default function* rootSaga() {
  yield all([fork(ApiPractiesSagas)]);
}
