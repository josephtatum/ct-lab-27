import React from 'react';
import PropTypes from 'prop-types';
import { zoo } from '../../services/madlib';
import styles from './madlib.css';

const Result = ({ words, closeResult }) => (
  <>
    <p className={styles.result}>{zoo(...words)}</p>
    <button className={styles['close-results']} onClick={closeResult}>Go Again!</button>
  </>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
