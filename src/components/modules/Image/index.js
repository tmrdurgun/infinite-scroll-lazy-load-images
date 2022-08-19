import React, { memo, useState, useContext } from 'react';

import styles from './style.module.scss';

const Image = (props) => {
  const { image } = props;

  return (
    <>
      {image.showImage && <div className={`${styles.image} mb-15`}>

        <div className='mb-15'>{image.webImage.url}</div>

        <p className="text-bold">{image.longTitle}</p>
        <p>{image.productionPlaces[0]}</p>
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
