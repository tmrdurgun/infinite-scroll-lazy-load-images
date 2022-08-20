export const selectImage = (value, dispatch) => {
  dispatch({
    type: 'SELECT_IMAGE',
    value,
  });
};