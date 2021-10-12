import { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import './Form.css';


class Form extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <PersonalInfo />
        </form>
      </div>
    )
  }
}

export default Form;
