import { Component } from 'react';
import PropTypes from 'prop-types';

class Others extends Component {
  render() {
    const { imputcheckbox, imputfile, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Outros</legend>
        <div>
          <label>
            Segundo imput tipo checkbox:
            <input
              type="checkbox"
              name='imputcheckbox'
              imputcheckbox={imputcheckbox.toString()}
              onChange={handleChange}
            />
            {imputcheckbox === false ? 'Aceite os termos' : 'Ok'}
          </label>
        </div>
        <label>
          Terceiro imput tipo file:
          <input className='fileBtn'
            type="file"
            name='imputfile'
            imputfile={imputfile}
            onChange={handleChange} />
          {imputfile === '' ? ' Adiciona um arquivo' : 'Ok'}
        </label>
      </fieldset>
    )
  }
}

Others.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imputcheckbox: PropTypes.bool.isRequired,
  imputfile: PropTypes.any.isRequired,
}

export default Others;