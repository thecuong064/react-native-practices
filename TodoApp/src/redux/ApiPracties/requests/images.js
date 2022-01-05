import API_END_POINTS from '../../../constants/apiUrl';

export function getImagesApiRequest() {
  let getImagesRequest = new Request(API_END_POINTS.GET_PHOTOS, {
    method: 'GET',
  });
  return fetch(getImagesRequest);
}
