import { Component } from 'react';
import PropTypes from 'prop-types';

class Texts extends Component {
  render() {
    const { imputText, textArea, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Textos</legend>
        <label>
          <p>Primeiro imput tipo texto: </p>
          <input
            name='imputText'
            type="text"
            imputText={imputText}
            onChange={handleChange} />
          {!imputText.length ? ' -texto inválido- ' : ' -ok- '}
        </label>
        <label>
          <p>Text area: </p>
          <textarea
            name='textArea'
            textArea={textArea}
            onChange={handleChange} />
          {!textArea.length ? ' -texto inválido- ' : ' -ok- '}
        </label>
      </fieldset>
    );
  }
}

Texts.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imputText: PropTypes.string.isRequired,
  textArea: PropTypes.string.isRequired,
}

export default Texts;