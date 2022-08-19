import React, { createContext, useReducer } from 'react';

import { reducer } from './reducers';

import ImageService from '../services/ImageService';
const imageService = new ImageService();

const initialState = {
  images: []
};

/*
  Module pattern helps to fill images with encapsulation and self provoke ability
*/
(async () => {
  const images = await imageService.getImages();

  if (images) {
    initialState.images = images.data;
  }
})();

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};