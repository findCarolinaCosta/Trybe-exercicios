import { Component } from "react";
import data from "../data";
import Pokemon from "./Pokemon";

class PokemonsList extends Component {
  render() {
    return (
      <section>
        {data.map((elem) => {
          return <Pokemon key={data.id} pokemon={elem} />;
        })}
      </section>
    )
  }
}

export default PokemonsList;