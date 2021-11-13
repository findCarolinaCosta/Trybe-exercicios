import React, { Component } from 'react';
import './Component.css' //recomendado um css para cada componente, apesar que se aplicado no app, por exemplo, a estilização é herdada.

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className='name'><h1>Carolina Pereira da Costa</h1></div>
        <div className='container-div'><p>Futura desenvolvedora web</p></div>
        <div className='container-div'><p>Meu primeiro Hello world com react</p></div >
        <div className='container-div'><h2>It is {new Date().toLocaleTimeString()}.</h2></div>
      </div >
    );
  };
}

export default AboutMe;