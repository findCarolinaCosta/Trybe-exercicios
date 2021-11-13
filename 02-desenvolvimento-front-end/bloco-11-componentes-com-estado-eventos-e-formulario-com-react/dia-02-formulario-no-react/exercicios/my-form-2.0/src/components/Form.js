import { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import './Form.css';
import DetailsLastJob from './DetailsLastJob';
import ButtonCleanAll from './ButtonCleanAll';


class Form extends Component {
  render() {
    const { handleChange, stateData, sendForm } = this.props;
    return (
      <div className='container'>
        <form>
          <PersonalInfo handleChange={handleChange} stateData={stateData} />
          <DetailsLastJob handleChange={handleChange} stateData={stateData} />
          <input type='button' onClick={sendForm} value="Enviar" />
          <ButtonCleanAll { ...this.props}/>
        </form>
      </div>
    )
  }
}

export default Form;
