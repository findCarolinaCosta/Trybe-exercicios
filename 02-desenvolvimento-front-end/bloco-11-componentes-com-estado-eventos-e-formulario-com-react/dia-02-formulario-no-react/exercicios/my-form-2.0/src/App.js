import { Component } from 'react';
import Form from './components/Form';
import './App.css';
import FilledInfo from './components/FilledInfo';
import INITIAL_STATE from './StateData';

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
    const { name, email, cpf, address, city, state, addresstype, curriculumsummary, office, descriptionjob } = this.state;
    const stateData = { name, email, cpf, address, city, state, addresstype, curriculumsummary, office, descriptionjob };
    return (
      <main>
        < Form handleChange={this.handleChange} stateData={stateData} sendForm={this.sendForm} { ...this.state } cleanForm={this.cleanForm}/>
      </main >
    );
  }
}

export default App;
