import { Component } from 'react';
import states from '../data-state'

class States extends Component {
  render() {
    return (
      <select name="state" id="state" className='text'>
        {states.map(state =>
          <option key={state.uf} value={state.uf}>{state.nome}</option>
        )}
      </select>
    )
  }
}

export { States };
