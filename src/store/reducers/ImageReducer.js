export const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_IMAGE':
      return {
        ...state,
        selectedImage: action.value
      };
    default:
      return state;
  }
};