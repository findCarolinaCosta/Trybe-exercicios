import React, { Component } from 'react';
import  fetchDogApi  from '../../services/index';
import './style.css';

class CardDog extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      DogName: '',
      arrayInfos: [],
    }
  }
  
  componentDidMount() {
    if (localStorage.InfosDogs) {
      const getArrayInfo = JSON.parse(localStorage.InfosDogs);
      const lastDog = getArrayInfo[getArrayInfo.length - 1].message;
      this.setState({
        arrayInfos: getArrayInfo,
        data: { message: lastDog }
      });
    } else {
      this.setDataState();
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return nextState.data.message.includes('terrier') ? false : true;
  }

  componentDidUpdate(_PrevProps, PrevState) {
    const { data } = this.state;
    if (PrevState.data !== data) {
      const dogBreed = data.message.split('/');
      alert(`Dog breed: ${dogBreed[4]}`);
    }
  }
  
  setDataState = async () => {
   this.setState({  data: await fetchDogApi() })
  }

  getDogName = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveDogName = () => {
    const { data: { message }, DogName, arrayInfos } = this.state;
    const dogInfos = { message, DogName };
    const newArrayInfo = [ ...arrayInfos, dogInfos ];
    this.setState({ arrayInfos: newArrayInfo});
    this.setState({ DogName: "" });
    localStorage.setItem('InfosDogs', JSON.stringify(newArrayInfo));
  }

  render() { 
    const  { data, DogName } = this.state;
    if (data === '') return "loading...";
    return (
      <div className="card-dog">
        <p>Dogs:</p>
        <div>
          <img className="Dog-img" src={data.message} alt="Dog image" />
        </div>
        <button onClick={ () => this.setDataState() }>Novo dog</button>
        <div>
          <input 
            type="text" 
            name="DogName" 
            value={ DogName }
            onChange={ (event) => this.getDogName(event) } placeholder="Digite um nome para o dog"
          />
          <button type="button" onClick={ this.saveDogName }>Salvar nome</button>
        </div>
      </div>
    )
  }
}
 
export default CardDog;