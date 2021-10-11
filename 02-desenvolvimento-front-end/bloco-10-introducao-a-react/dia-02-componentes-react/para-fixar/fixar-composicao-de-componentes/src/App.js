import { Component } from 'react'
import './App.css';
import Album from './components/Album';
import UserProfile from './components/UserProfile';
import { albuns } from './data-ex1';
import { joao, amelia } from './data-ex2';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='div-internal'>
          <h1>Exemplo 1</h1>
          <p>Importante notar que os dois componentes irmãos, são, na realidade, o mesmo componente, porém reutilizados** com base nas props recebidas. Ou seja, apesar de serem o mesmo componente, renderizam informações diferentes, uma vez que recebem props diferentes.</p>
          {albuns.map(elem => <Album key={elem.title} album={elem} />)}
        </div>
        <hr />
        <div className='div-internal'>
          <h1>Exemplo 2</h1>
          <UserProfile user={joao} />
          <UserProfile user={amelia} />
          <p>Analisando o código do exemplo 2, temos: <br />
            1. O componente App é composto por dois componentes UserProfile . Em outras palavras, o componente App é pai dos dois componentes UserProfile . Além disso, user=joao e user=amelia são componentes irmãos , e eles dois são filhos do componente App .<br />
            2. O componente UserProfile , por sua vez, possui um componente Image . Ou seja, UserProfile tem Image como filho. <br />
            3. Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código acima, o componente App , que é pai dos dois componentes UserProfile , passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhando para UserProfile , que passa para seu componente filho Image a origem de uma imagem.</p>
        </div>
      </div>
    );
  }
}

export default App;
