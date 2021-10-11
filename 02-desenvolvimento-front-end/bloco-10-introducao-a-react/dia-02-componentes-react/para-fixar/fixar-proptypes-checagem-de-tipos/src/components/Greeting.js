import React from 'react';
import PropTypes from 'prop-types'; // 1º passo

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = { //2º passo
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}; //isRequired em casos que props são essenciais para o funcionamento de qualquer componente. Caso contrário fica como validadores opcionais.

export default Greeting;