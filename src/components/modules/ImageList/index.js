import React, { memo } from 'react';

import { Image } from '../../../components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

const ImageList = ({ images }) => {

  /* 
    The factory pattern allows to factor out the process of object creation. This can have multiple purpose:

    - the final object depends on the parameters.
    - separate a simple object representation from the logic of creating it.
  */
  const renderFactory = () => {
    if (images && images.length > 0) {
      return (
        <div className={styles.images}>
          {images.map((image, index) => (
            <Image
              key={index + 1}
              image={image}
              collapsed
            />
          ))}
        </div>
      );
    }

    return <h3 className="text-center text-bold mb-30">No Images To Display <FontAwesomeIcon icon={faFrown} size="lg" /></h3>;
  };

  return (<>{renderFactory()}</>);
};

export const MemoizedImageList = memo(ImageList);