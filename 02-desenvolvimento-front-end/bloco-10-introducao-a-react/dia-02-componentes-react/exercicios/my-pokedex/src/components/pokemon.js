import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <article>
        <p>{pokemons.name}</p>
        <p>{pokemons.type}</p>
        <p>Average weight: {pokemons.averageWeight.value} {pokemons.averageWeight.measurementUnit}</p>
        <img src={pokemons.image} alt={pokemons.name} />
      </article>
    );
  }
}

export default Pokemon;