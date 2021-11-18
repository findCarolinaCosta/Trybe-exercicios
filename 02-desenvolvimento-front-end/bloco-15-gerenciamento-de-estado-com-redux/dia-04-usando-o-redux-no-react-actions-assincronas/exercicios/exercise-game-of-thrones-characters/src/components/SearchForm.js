import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import { requestCharacterThunk } from '../store/actions';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { getCharacter } = this.props;

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  getCharacter(inputText);
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  getCharacter: name => dispatch(requestCharacterThunk(name))
})

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm)

//faça as proptypes da ação oriunda do thunk
SearchForm.propTypes = {
  getCharacter: PropTypes.func.isRequired,
}
