import React from 'react';

class Greeting extends React.Component {
  render() {
    //faz isso por trás dos pano
    //const props = { name: 'Samuel', lastName: 'Silva' }
    //sendo assim posível até descostruir
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

export default Greeting;