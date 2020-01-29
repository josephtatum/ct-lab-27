import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, type }) => {
  return <button type={type}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
