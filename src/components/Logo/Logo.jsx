import { oneOfType, shape, string } from 'prop-types';
import React from 'react';

import styles from './Logo.module.scss';

const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} className={styles.logo} />
);

Logo.propTypes = {
  src: oneOfType([string, shape()]).isRequired,
  alt: string.isRequired,
};

export default Logo;
