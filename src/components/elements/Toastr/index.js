import React from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Toastr = ({ message, onClose }) => {
  return (
    <>
      {message && <div className={styles.Toastr}>{message} <FontAwesomeIcon icon={faClose} size="lg" onClick={onClose} className="cursor-pointer" /></div>}
    </>
  );
};
