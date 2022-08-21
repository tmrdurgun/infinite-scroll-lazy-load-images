import React, { useState, useEffect, memo, useContext } from 'react';
import { ImageList, Toastr } from '../../components';

import ImageService from '../../services/ImageService';
import { Store } from '../../store';

const imageService = new ImageService();

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { state } = useContext(Store);
  const [errorMessage, setErrorMessage] = useState();

  const getImages = async () => {

    const imagesResponse = await imageService.getImages({
      involvedMaker: 'Rembrandt van Rijn',
      ps: perPage,
      p: page
    });

    if (!imagesResponse.success) setErrorMessage(imagesResponse.message);

    if (imagesResponse.success) {
      setImages(prev => [...prev, ...imagesResponse.data]);
    };
  };

  const handleScroll = () => {
    const windowInnerHeight = window.innerHeight;
    const scrollFromTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    if (windowInnerHeight + scrollFromTop + 1 >= scrollHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    getImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // console.log('images:', images);
  console.log('selected image: ', state.selectedImage);

  return (
    <>
      {errorMessage && <Toastr message={errorMessage} onClose={() => setErrorMessage(undefined)} />}
      <ImageList images={images} />
    </>
  );
};

export default memo(Home);