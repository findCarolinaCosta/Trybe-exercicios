import React from 'react';

export default class ReactClass extends React.Component {
  render() {
    return (
      <div className='container-div'> {/* css herdado do app */}
        <h1>My first React Class Component!</h1>
          <p>Exemplo de componente de classe que rederizaria um input em diferentes locais que fosse necessário:</p>
          <input /><button>Submit</button>
      </div>
    )
  }
}