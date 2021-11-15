import React, { Component } from 'react';
import  fetchDogApi  from '../../services/index';
import './style.css';

class CardDog extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  setDataState = async () => {
   this.setState({  data: await fetchDogApi() })
  }

  componentDidMount() {
    this.setDataState();
  }

  render() { 
    const  { data } = this.state;
    if (data === '') return "loading...";
    return (
      <div className="card-dog">
        <p>Dogs:</p>
        <div>
          <img className="Dog-img" src={data.message} alt="Dog image" />
        </div>
        <button onClick={ () => this.setDataState() }>Novo dog</button>
      </div>
    )
  }
}
 
export default CardDog;