import React, { memo, useState, useContext } from 'react';

import styles from './style.module.scss';

import LazyLoad from 'react-lazyload';

import { Placeholder } from '../../../components';

import { Store } from '../../../store';

import { selectImage } from '../../../store/actions';

const Image = (props) => {
  const { image } = props;
  const [loaded, setLoaded] = useState(false);
  const { dispatch } = useContext(Store);

  function handleImageLoad() {
    setLoaded(true);
  }

  const handleSelectImage = async (selectedImage) => {
    selectImage(selectedImage, dispatch);
  };

  return (
    <>
      {image.showImage && <div className={`${styles.image} mb-15 cursor-pointer`} onClick={() => handleSelectImage(image)}>

        <div className='mb-15'>
          {!loaded && <Placeholder />}

          <LazyLoad>
            <img className={!loaded ? styles.hidden : styles.visible} src={image.webImage.url} alt={image.title} onLoad={handleImageLoad} />
          </LazyLoad>

        </div>

        <p className="text-bold">{image.longTitle}</p>
        <p>{image.ImageionPlaces ? image.ImageionPlaces[0] : ''}</p>
      </div>}
    </>

  );
};

/* 
  The decorator pattern allows to "wrap" object in each other, 
  providing that they share the same interface and call each other methods. 
  In React React.memo is an example of a usage of the decorator pattern.
*/
export const MemoizedImage = memo(Image);
