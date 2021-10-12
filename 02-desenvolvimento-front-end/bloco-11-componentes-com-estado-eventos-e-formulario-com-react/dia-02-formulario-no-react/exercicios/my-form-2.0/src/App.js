import { Component } from 'react';
import Form from './components/Form';
import './App.css';
import FilledInfo from './components/FilledInfo';


const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  addresstype: '',
  curriculumsummary: '',
  office: '',
  descriptionjob: '',
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { name, email, cpf, address, city, state, addresstype, curriculumsummary, office, descriptionjob, submitted, sendForm } = this.state;
    const stateData = { name, email, cpf, address, city, state, addresstype, curriculumsummary, office, descriptionjob }
    return (
      <main>
        < Form handleChange={this.handleChange} stateData={stateData} sendForm={sendForm} />
        {submitted && <FilledInfo currentState={this.state} />}
      </main >
    );
  }
}

export default App;
