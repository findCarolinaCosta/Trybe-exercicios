import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
    console.log('Retorno do fetch');
    console.log(this.state.characters, 'State na função de fetch');
  }

  componentDidMount() {
    console.log('Sobre qualquer mudança o componentDidMount renderiza a classe novamente');
    console.log(this.state.characters, 'State no componentDidMount');
    this.fetchCharacters();
  } // resolvido os problemas chamando a função fetchCharacters dentro do componentDidMount 

  renderJokeElement() {
    const { characters } = this.state;
    return (
        <>
          <section className="body">
            {characters.map(({ name, image, id }) => {
            return (
                <div className="container" key={id}> {/* as keys são usadas pelo react para identificar quais itens sofreram alterações, para que se for preciso rederizar novamente somente pela key modificada e não toda uma lista, etc...*/}
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
          </section>
        </>
    )
  }

  render() {
    const { characters, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log('Render da classe.', 'Itens do characters do state:', characters.length);
    if (characters.length > 0) console.log('Quando o characters tiver algo esse output é chamado');
    return (
        <main className="App">
          <h1>
            Ricky and Morty Characters:
          </h1>
          {loading ? loadingElement :  this.renderJokeElement()}
        </main>
    );
  }
}

export default App;
