import { Component } from 'react';
import PropTypes from 'prop-types';

class Texts extends Component {
  render() {
    const { imputtext, textarea, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Textos</legend>
        <label>
          <p>Primeiro imput tipo texto: </p>
          <input
            name='imputtext'
            type="text"
            imputtext={imputtext}
            onChange={handleChange} />
          {!imputtext.length ? ' -texto inválido- ' : ' -ok- '}
        </label>
        <label>
          <p>Text area: </p>
          <textarea
            name='textarea'
            textarea={textarea}
            onChange={handleChange} />
          {!textarea.length ? ' -texto inválido- ' : ' -ok- '}
        </label>
      </fieldset>
    );
  }
}

Texts.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imputtext: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
}

export default Texts;