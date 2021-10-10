import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;


//1. Qual o nome do componente declarado acima?
//R: Image, com a primeira letra maiúscula para dizer que é um componente