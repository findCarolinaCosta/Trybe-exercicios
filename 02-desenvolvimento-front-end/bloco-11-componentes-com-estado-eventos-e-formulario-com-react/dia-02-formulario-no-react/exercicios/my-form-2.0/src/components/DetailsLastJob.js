import { Component } from "react";

class DetailsLastJob extends Component {
  render() {
    return (
      <fieldset className='container-info details-last-job'>
        <legend>Dados do último emprego: </legend>

        <div className='div-internal'>
          <label htmlFor='curriculum-summary'>
            Resumo do currículo :
            <textarea id='curriculum-summary' name='curriculum-summary' placeholder='Digite...' maxLength='1000' rows="5" cols="33" required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor='office'>
            Cargo:
            <textarea id='office' name='office' maxLength='40' rows="5" cols="33" required='required' placeholder=' Digite...' onChange={console.error(`Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo "Preencha com cuidado esta informação". Exiba essa mensagem apenas uma vez.`)} />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor='job-description'>
            Descrição do cargo
            <input id='job-description' name='job-description' className='text' type='text' placeholder='Digite...' maxLength='500' required='required' />
          </label>
        </div>

      </fieldset>
    );
  }
}

export default DetailsLastJob;
