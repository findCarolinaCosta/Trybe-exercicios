import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <h1>2. Chame o componente Image, de forma que seja mostrada esta imagem - Link, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.</h1>
        <img src={this.props.source} alt={this.props.alternativeText} />
      </div>
    );
  }
}

export default Image;
