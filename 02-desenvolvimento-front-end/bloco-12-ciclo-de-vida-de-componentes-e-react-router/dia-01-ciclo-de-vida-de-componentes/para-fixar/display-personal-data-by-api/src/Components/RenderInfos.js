import React from 'react';
import PersonCard from './PersonCard';

class RenderInfos extends React.Component {
  constructor() {
    super();
    this.state = {
      person: []
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.person[0].dob.age > AGE) {
      console.error('Idade:', nextState.person[0].dob.age);
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    try {
      const response = await fetch('https://api.randomuser.me/')
      const data = await response.json();
      this.setState({ person: data.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { person } = this.state;
    return (
      <>
      { person.length === 0 ? <p>Loading...</p> : person.map((person, index) => 
        <PersonCard key={index} person={ person } />) }
      </>
    );
  }
}

export default RenderInfos;