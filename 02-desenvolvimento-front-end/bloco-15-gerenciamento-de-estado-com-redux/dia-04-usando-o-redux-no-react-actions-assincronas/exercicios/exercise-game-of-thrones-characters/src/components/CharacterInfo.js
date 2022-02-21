import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { character, loading, error } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = state => ({
  character: state.character.payload,
  loading: state.character.loading,
  error: state.character.error,
})

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo);

//faça as propTypes
CharacterInfo.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
  }),
  loading: PropTypes.bool,
  error: PropTypes.string,
}