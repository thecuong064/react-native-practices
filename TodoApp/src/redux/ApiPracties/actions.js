import ApiActionTypes from './constants';

export const getImages = () => ({
  type: ApiActionTypes.GET_IMAGES,
  payload: null,
});

export const loadImages = payload => ({
  type: ApiActionTypes.LOAD_IMAGES,
  payload: payload,
});
