import { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import './Form.css';
import DetailsLastJob from './DetailsLastJob';


class Form extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <PersonalInfo />
          <DetailsLastJob />
        </form>
      </div>
    )
  }
}

export default Form;
