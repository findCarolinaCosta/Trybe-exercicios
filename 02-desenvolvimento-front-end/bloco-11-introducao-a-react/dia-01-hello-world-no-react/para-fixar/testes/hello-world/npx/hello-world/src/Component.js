import React, { Component } from 'react';
import './Component.css'

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className='name'><h1>Carolina Pereira da Costa</h1></div>
        <div className='description'><p>Futura desenvolvedora web</p></div>
        <div className='description'><p>Meu primeiro Hello world com react</p></div >
      </div >
    );
  };
}

export default AboutMe;