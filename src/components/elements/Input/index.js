import React from 'react';

import styles from './style.module.scss';

export const Input = ({
  label,
  value,
  onChange
}) => (
  <div className={styles.input}>
    {label && <label>{label}</label>}
    <input type="text" value={value} onChange={onChange} />
  </div>
);
