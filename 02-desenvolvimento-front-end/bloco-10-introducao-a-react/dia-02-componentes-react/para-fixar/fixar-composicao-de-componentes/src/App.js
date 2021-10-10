import { Component } from 'react'
import './App.css';
import Album from './components/Album';

class App extends Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <div>
        <p>Importante notar que os dois componentes irmãos, são, na realidade, o mesmo componente, porém reutilizados** com base nas props recebidas. Ou seja, apesar de serem o mesmo componente, renderizam informações diferentes, uma vez que recebem props diferentes.</p>
        <Album album={album01} />
        <Album album={album02} />
      </div>
    );
  }
}

export default App;
