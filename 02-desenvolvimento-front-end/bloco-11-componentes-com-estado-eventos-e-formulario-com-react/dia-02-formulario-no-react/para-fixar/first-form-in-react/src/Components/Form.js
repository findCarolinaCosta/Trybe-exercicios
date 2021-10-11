import { Component } from 'react';
import Select from './Select';
import Texts from './Texts';
import Others from './Others'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      selectFild: 'Selecione',
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
    const { imputText, textArea, imputCheckbox, imputFile, selectFild } = this.state;

    return (
      <div>
        <h1>Fixando como faz formulário em react com componentes controlados:</h1>
        <h2>Para fixar</h2>
        <p>
          8 - Faça duas validações em um desses componentes filhos e uma em um outro.
        </p>
        <form>

          < Select value={selectFild} handleChange={this.handleChange} />

          <Texts
            imputText={imputText}
            textArea={textArea}
            handleChange={this.handleChange} />

          <Others
            imputCheckbox={imputCheckbox}
            imputFile={imputFile}
            handleChange={this.handleChange} />
        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div >
    );
  }
}

export default Form;