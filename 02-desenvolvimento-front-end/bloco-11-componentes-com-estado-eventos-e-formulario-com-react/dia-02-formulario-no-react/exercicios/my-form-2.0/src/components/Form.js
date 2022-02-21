import { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import './Form.css';
import DetailsLastJob from './DetailsLastJob';
import ButtonCleanAll from './ButtonCleanAll';
import FilledInfo from './FilledInfo';


class Form extends Component {
  render() {
    const { handleChange, stateData, sendForm, submitted } = this.props;
    return (
      <div className='container row'>
        <form className="container-form">
          <div className="column div-infos">
          <PersonalInfo handleChange={handleChange} stateData={stateData} />
          <DetailsLastJob handleChange={handleChange} stateData={stateData} />
          <input type='button' onClick={sendForm} value="Enviar" />
          <ButtonCleanAll { ...this.props}/>
          </div>
          <div className="column">
          {submitted && <FilledInfo currentState={this.props} />}
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
