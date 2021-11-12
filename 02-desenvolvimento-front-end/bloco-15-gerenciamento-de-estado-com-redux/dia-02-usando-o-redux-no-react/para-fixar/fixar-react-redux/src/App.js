import { Component } from 'react';
import { connect } from 'react-redux';
import { NEW_ACTION } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(NEW_ACTION('Exercicio para fixar concluído'));
  }
  render() {
    const { renderP } = this.props;
    return (
      <div className="App">
        <h1>Iniciando o exercício para fixar conexão do react com redux</h1>
        <p>{ renderP.state }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  renderP: state.myReducer,
})

export default connect(mapStateToProps)(App);
