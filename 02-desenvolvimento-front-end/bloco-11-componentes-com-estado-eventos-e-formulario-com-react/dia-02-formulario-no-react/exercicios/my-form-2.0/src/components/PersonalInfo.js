import { Component } from 'react';
import { States } from './States';

class PersonalInfo extends Component {
  render() {
    const { stateData, handleChange } = this.props;
    const style = {
      textTransform: 'uppercase',
    }
    return (
      <fieldset className='container-info'>
        <legend>Informações pessoais:</legend>

        <div className='div-internal'>
          <label htmlFor="name">
            Escreva seu nome completo:
            <input id='name' name='name' className='text' type="text" placeholder='Digite seu nome aqui' maxLength='40' style={style} value={stateData.name} onChange={handleChange} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="name">
            Escreva seu email:
            <input id='email' name='email' className='text' type='email' placeholder='Digite seu email aqui' maxLength='50' value={stateData.email} onChange={handleChange} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="cpf">
            Digite seu CPF:
            <input id='cpf' name='cpf' className='text' type='text' placeholder='Somente números' maxLength='11' value={stateData.cpf} onChange={handleChange} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="address">
            Digite seu Endereço:
            <input id='address' name='address' className='text' type='text' placeholder='Endereço, Nº' maxLength='200' value={stateData.address} onChange={handleChange} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="city">
            Digite sua cidade:
            <input id='city' name='city' className='text' type='text' placeholder='Cidade' maxLength='28' value={stateData.city} onChange={handleChange} required='required' />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="state">
            Selecione seu estado:
            <States statedata={stateData} handleChange={handleChange} />
          </label>
        </div>

        <div className='div-internal'>
          <label htmlFor="house">
            Selecione entre os tipos de moradia:
            <input
              type="radio"
              id="house"
              name="addresstype"
              value='house'
              onChange={handleChange}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apartment"
              name="addresstype"
              value='apartment'
              onChange={handleChange}
            />
            Apartamento
          </label>

        </div>

      </fieldset >
    );
  }
}

export default PersonalInfo;
