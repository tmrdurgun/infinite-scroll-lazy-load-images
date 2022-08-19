const getImages = (state, images) => {
  return {
    ...state,
    images
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return getImages(state, action.images);
    default:
      return state;
  }
};