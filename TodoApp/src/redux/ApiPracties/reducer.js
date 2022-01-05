import ApiActionTypes from './constants';

const initalImages = [];

const imagesReducer = (state = initalImages, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ApiActionTypes.LOAD_IMAGES: {
      return payload;
    }
    default:
      return state;
  }
};

export default imagesReducer;
