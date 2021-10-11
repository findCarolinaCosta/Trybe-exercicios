import { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Opção de select</legend>
        <label>
          <p>Campo de select: </p>
          <select name='selectFild' value={value} onChange={handleChange} >
            <option>Selecione</option>
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
          {value === 'Selecione' ? ' Selecione uma opção' : 'Ok'}
        </label>
      </fieldset >
    )
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Select;