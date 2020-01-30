import React from 'react';
import PropTypes from 'prop-types';
import styles from './madlib.css'

const Button = ({ label, type, className }) => {
  return <button className={styles[className]} type={type}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Button;
