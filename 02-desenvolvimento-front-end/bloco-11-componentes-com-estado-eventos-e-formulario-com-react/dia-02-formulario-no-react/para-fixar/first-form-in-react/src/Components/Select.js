import { Component } from 'react';

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Opção de select</legend>
        <label>
          <p>Campo de select: </p>
          <select name='selectFild' value={value} onChange={handleChange} >
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
        </label>
      </fieldset >
    )
  }
}

export default Select;