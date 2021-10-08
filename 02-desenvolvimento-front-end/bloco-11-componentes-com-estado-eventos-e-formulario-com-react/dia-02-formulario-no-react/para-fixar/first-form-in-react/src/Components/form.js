import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Fixando como faz formulário em react com componentes controlados:</h1>
        <h2>Para fixar</h2>
        <p>
          1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
        </p>
        <form>
          <label>
            <p>Campo de select: </p>
            <select>
              <option>Select 1</option>
              <option>Select 2</option>
              <option>Select 3</option>
              <option>Select 4</option>
            </select>
          </label>
          <label>
            <p>Primeiro imput tipo texto: </p>
            <input type="text" />
          </label>
          <label>
            <p>Text area: </p>
            <textarea></textarea>
          </label>
          <div>
            <label>
              Segundo imput tipo checkbox:
              <input type="checkbox" />
            </label>
          </div>
        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div>
    );
  }
}

export default Form;