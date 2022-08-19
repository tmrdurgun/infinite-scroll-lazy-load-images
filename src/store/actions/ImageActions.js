export const saveImages = (images, dispatch) => {
  dispatch({
    type: 'GET_IMAGES',
    images,
  });
};