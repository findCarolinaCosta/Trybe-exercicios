import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <article>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        <img src={pokemon.image} alt={pokemon.name} />
      </article>
    );
  }
}

export default Pokemon;