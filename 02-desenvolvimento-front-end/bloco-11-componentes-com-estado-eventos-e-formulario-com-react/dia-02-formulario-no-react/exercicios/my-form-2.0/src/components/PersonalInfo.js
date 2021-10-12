import { Component } from 'react';
import { States } from './States';

class PersonalInfo extends Component {
  render() {
    const style = {
      textTransform: 'uppercase',
    }
    return (
      <fieldset className='container-info'>
        <legend>Informações pessoais:</legend>

        <div className='div-internal'>
          <label htmlFor="name">
            Escreva seu nome completo:
            <input id='name' name='nome' className='text' type="text" placeholder='Digite seu nome aqui' maxLength='40' style={style} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="name">
            Escreva seu email:
            <input id='email' name='email' className='text' type='email' placeholder='Digite seu email aqui' maxLength='50' required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="cpf">
            Digite seu CPF:
            <input id='cpf' name='cpf' className='text' type='text' placeholder='Somente números' maxLength='11' required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="address">
            Digite seu Endereço:
            <input id='address' name='address' className='text' type='text' placeholder='Endereço, Nº' maxLength='200' required='required' onChange={event => event.target.value.match(/^\d/) ? console.log(event.target.value.replace(/[^\w\s]/gi, '')) : console.log(event.target.value)} />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="city">
            Digite sua cidade:
            <input id='city' name='city' className='text' type='text' placeholder='Cidade' maxLength='28' required='required'
              onChange={
                console.error('Tem que fazer uma função linha 45 do PersonalInfo')
              }
            />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="state">
            Selecione seu estado:
            <States />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="house">
            Selecione entre os tipos de moradia:
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apartment"
              name="addressType"
              value="apartment"
            />
            Apartamento
          </label>

        </div>

      </fieldset >
    );
  }
}

export default PersonalInfo;
