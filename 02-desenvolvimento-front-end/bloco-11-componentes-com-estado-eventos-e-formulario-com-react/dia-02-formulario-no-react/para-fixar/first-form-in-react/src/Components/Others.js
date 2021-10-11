import { Component } from 'react';
import PropTypes from 'prop-types';

class Others extends Component {
  render() {
    const { imputCheckbox, imputFile, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Outros</legend>
        <div>
          <label>
            Segundo imput tipo checkbox:
            <input
              type="checkbox"
              name='imputCheckbox'
              imputCheckbox={imputCheckbox}
              onChange={handleChange}
            />
            {imputCheckbox === false ? 'Aceite os termos' : 'Ok'}
          </label>
        </div>
        <label>
          Terceiro imput tipo file:
          <input
            type="file"
            name='imputFile'
            imputFile={imputFile}
            onChange={handleChange} />
          {imputFile === '' ? ' Adiciona um arquivo' : 'Ok'}
        </label>
      </fieldset>
    )
  }
}

Others.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imputCheckbox: PropTypes.bool.isRequired,
  imputFile: PropTypes.any.isRequired,
}

export default Others;