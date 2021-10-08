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
          5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
        </p>
        <form>
          <label>
            <p>Campo de select: </p>
            <select name='selectFild' value={this.state.selectFild} onChange={this.handleChange} >
              <option>Select 1</option>
              <option>Select 2</option>
              <option>Select 3</option>
              <option>Select 4</option>
            </select>
          </label>
          <label>
            <p>Primeiro imput tipo texto: </p>
            <input name='imputText' type="text" value={this.state.imputText} onChange={this.handleChange} />
          </label>
          <label>
            <p>Text area: </p>
            <textarea name='textArea' value={this.state.textArea} onChange={this.handleChange} />
          </label>
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
        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div >
    );
  }
}

export default Form;