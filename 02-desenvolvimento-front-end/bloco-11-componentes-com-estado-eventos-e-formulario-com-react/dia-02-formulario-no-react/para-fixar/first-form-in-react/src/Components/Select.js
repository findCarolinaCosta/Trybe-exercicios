import { Component } from 'react';

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        <p>Campo de select: </p>
        <select name='selectFild' value={value} onChange={handleChange} >
          <option>Select 1</option>
          <option>Select 2</option>
          <option>Select 3</option>
          <option>Select 4</option>
        </select>
      </label>
    )
  }
}

export default Select;