import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    adjective1: '',
    adjective2: '',
    adjective3: '',
    adjective4: '',
    noun1: '',
    noun2: '',
    noun3: '',
    verb1: '',
    verb2: '',
    verb3: '',
    adverb1: '',
    adverb2: '',
    words: [],
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.toggleResult();
  }

  render() {
    const { showResult, words } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
