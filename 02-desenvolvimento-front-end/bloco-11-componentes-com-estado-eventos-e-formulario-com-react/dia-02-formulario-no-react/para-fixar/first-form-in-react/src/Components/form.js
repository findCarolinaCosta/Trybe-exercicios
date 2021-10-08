import { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      selectFild: '',
      imputText: '',
      textArea: '',
      imputCheckbox: false,
      imputFile: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Fixando como faz formulário em react com componentes controlados:</h1>
        <h2>Para fixar</h2>
        <p>
          7 - Faça todos os seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
        </p>
        <form>
          <fieldset>
            <legend>Opção de select</legend>
            <label>
              <p>Campo de select: </p>
              <select name='selectFild' value={this.state.selectFild} onChange={this.handleChange} >
                <option>Select 1</option>
                <option>Select 2</option>
                <option>Select 3</option>
                <option>Select 4</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Textos</legend>
            <label>
              <p>Primeiro imput tipo texto: </p>
              <input name='imputText' type="text" value={this.state.imputText} onChange={this.handleChange} />
            </label>
            <label>
              <p>Text area: </p>
              <textarea name='textArea' value={this.state.textArea} onChange={this.handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <legend>Outros</legend>
            <div>
              <label>
                Segundo imput tipo checkbox:
                <input type="checkbox" name='imputCheckbox' value={this.state.imputCheckbox} onChange={this.handleChange} />
              </label>
            </div>
            <label>
              Terceiro imput tipo file:
              <input type="file" name='imputFile' value={this.state.imputFile} onChange={this.handleChange} />
            </label>
          </fieldset>

        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div >
    );
  }
}

export default Form;