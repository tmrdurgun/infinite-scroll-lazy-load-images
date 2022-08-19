import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to={'/'}> <FontAwesomeIcon icon={faChevronLeft} size="lg" /> </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.logo}>MUSEUM</div>

    </div>
  );
};
