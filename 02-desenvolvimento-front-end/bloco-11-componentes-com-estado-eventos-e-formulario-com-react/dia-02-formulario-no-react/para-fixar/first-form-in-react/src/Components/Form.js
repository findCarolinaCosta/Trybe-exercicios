import { Component } from 'react';
import Select from './Select';
import Texts from './Texts';
import Others from './Others'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      selectFild: 'Selecione',
      imputtext: '',
      textarea: '',
      imputcheckbox: false,
      imputfile: '',
      formComErros: true,
    }
  }

  handleError = () => {
    const { selectFild, imputtext, textarea, imputcheckbox, imputfile } = this.state;
    const errors = [
      selectFild === 'Selecione',
      !imputtext.length,
      !textarea.length,
      imputcheckbox === false,
      imputfile === '',
    ];
    const formulario = errors.every(error => error !== true);
    this.setState({
      formComErros: !formulario,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { imputtext, textarea, imputcheckbox, imputfile, selectFild } = this.state;

    return (
      <div className='container'>
        <h1>Fixando como faz formulário em react com componentes controlados:</h1>
        <h2>Para fixar</h2>
        <p>
          9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário. <br />
          🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?
        </p>
        <form>

          < Select value={selectFild} handleChange={this.handleChange} />

          <Texts
            imputtext={imputtext}
            textarea={textarea}
            handleChange={this.handleChange} />

          <Others
            imputcheckbox={imputcheckbox}
            imputfile={imputfile}
            handleChange={this.handleChange} />
          <div className='btnSubmit-container'>
            <button type="submit" className='btnSubmit'>Enviar formulário</button>
          </div>
        </form>

        <p>💡 Atenção!Essa nomenclatura, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário!Cuidado para não confundir.</p>
      </div >
    );
  }
}

export default Form;