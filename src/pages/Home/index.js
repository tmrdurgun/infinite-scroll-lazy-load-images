import React, { useState, useEffect, memo, useContext } from 'react';
import { ImageList, Loading } from '../../components';

import ImageService from '../../services/ImageService';
import { Store } from '../../store';

const imageService = new ImageService();

/*
  Lazy load & infinit scroll works fine with enough items as page size starter but runs into data sync issues after remove action so disabled until fixed
*/
const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 8;
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    setLoading(true);

    // const imagesResponse = await imageService.getImagesPerPage(perPage, page);
    const imagesResponse = await imageService.getImages({
      involvedMaker: 'Rembrandt van Rijn'
    });
    if (imagesResponse.success) {
      setImages(imagesResponse.data);
      setLoading(false);
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

  /* useEffect(() => {
    getImages();
  }, [page, state.images]); */

  useEffect(() => {
    getImages();
  }, [state.images]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('images:', images);

  return (
    <>
      <ImageList images={images} />
      {(loading && images.length > 0) && <Loading />}
    </>
  );
};

export default memo(Images);