import React from 'react';
import PropTypes from 'prop-types'; // 1º passo

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return (<h1>Hello, {name} {lastName}</h1>);
  }
}

Greeting.propTypes = { //2º passo
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}; //isRequired em casos que props são essenciais para o funcionamento de qualquer componente. Caso contrário fica como validadores opcionais.

Greeting.defaultProps = {
  name: 'Strange'
}; // pode-se determinar uma prop default para as props esperadas caso não fores informadas

export default Greeting;