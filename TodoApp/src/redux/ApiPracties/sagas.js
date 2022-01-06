import {call, put, fork, takeLatest} from 'redux-saga/effects';
import {loadImages} from './actions';
import ApiActionTypes from './constants';
import {getImagesApiRequest} from './requests/images';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getImagesAsync() {
  try {
    yield put(loadImages([]));
    let response = yield call(getImagesApiRequest);
    let data = yield response.json();
    yield delay(1000);
    yield put(loadImages(data));
  } catch (error) {
    console.log('getUserAsync error: ' + error);
  }
}

function* getListCardWatch() {
  yield takeLatest(ApiActionTypes.GET_IMAGES, getImagesAsync);
}

export default function* rootChild() {
  yield fork(getListCardWatch);
}
