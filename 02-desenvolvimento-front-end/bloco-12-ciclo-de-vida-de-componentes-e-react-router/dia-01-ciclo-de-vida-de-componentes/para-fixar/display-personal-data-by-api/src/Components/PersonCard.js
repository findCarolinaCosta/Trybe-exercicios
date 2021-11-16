import React from 'react';

class PersonCard extends React.Component {
  render() { 
    const { person } = this.props;
    const { name, email, id, picture, dob, location } = person;
    const namePerson = `${name.first} ${name.last}`;
    console.log(person);
    return (
      <section key={ id.value } className='card'>
        <img src={ picture.large } alt={namePerson}></img>
        <h1>{ `${name.title}: ${namePerson}` }</h1>
        <span>{ `Idade: ${dob.age} anos` }</span>
        <p>{ `Email: ${email}` }</p>
        <p>{ `Pais de origem: ${location.country} ` }</p>
      </section>
    );
  }
}
 
export default PersonCard;