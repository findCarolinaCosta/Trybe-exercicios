import { Component } from 'react';
import states from '../data-state'

class States extends Component {
  render() {
    const { stateData, handleChange } = this.props;
    return (
      <select name="state" id="state" className='text' onChange={handleChange} >
        <option>Selecione</option>
        {states.map(state =>
          <option key={state.uf} value={stateData.state}>{state.nome}</option>
        )}
      </select>
    )
  }
}

export { States };
