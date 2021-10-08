import { Component } from 'react';

class Texts extends Component {
  render() {
    const { imputText, textArea, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Textos</legend>
        <label>
          <p>Primeiro imput tipo texto: </p>
          <input name='imputText'
            type="text"
            imputText={imputText}
            onChange={handleChange} />
        </label>
        <label>
          <p>Text area: </p>
          <textarea name='textArea'
            textArea={textArea}
            onChange={handleChange} />
        </label>
      </fieldset>
    );
  }
}

export default Texts;