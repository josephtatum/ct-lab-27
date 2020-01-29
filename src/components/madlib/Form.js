import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange} name="adjective1" placeholder="adjective" />
    <input type="text" onChange={onChange} name="noun1" placeholder="noun" />
    <input type="text" onChange={onChange} name="verb1" placeholder="verb, past tense" />
    <input type="text" onChange={onChange} name="adverb1" placeholder="adverb" />
    <input type="text" onChange={onChange} name="adjective2" placeholder="adjective" />
    <input type="text" onChange={onChange} name="noun2" placeholder="noun" />
    <input type="text" onChange={onChange} name="noun3" placeholder="noun" />
    <input type="text" onChange={onChange} name="adjective3" placeholder="adjective" />
    <input type="text" onChange={onChange} name="verb2" placeholder="verb" />
    <input type="text" onChange={onChange} name="adverb2" placeholder="adverb" />
    <input type="text" onChange={onChange} name="verb3" placeholder="verb, past tense" />
    <input type="text" onChange={onChange} name="adjective4" placeholder="adjective" />
    <Button label='Create Madlib' type='submit' />
    <Button label='Reset Form' type='reset'/>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
