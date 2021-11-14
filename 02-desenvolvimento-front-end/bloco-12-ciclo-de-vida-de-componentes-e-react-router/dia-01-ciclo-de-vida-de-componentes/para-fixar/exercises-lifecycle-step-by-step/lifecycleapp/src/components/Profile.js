import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
      userName: '',
      loading: true,
    };

    this.changeDataJson = this.changeDataJson.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { userName } = this.state;
    const myUser = userName; // Preencha myUser com o seu user do GitHub.
    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.changeDataJson(dataJson);
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    /* eslint-disable no-alert */
    alert('Você ocultou seu perfil');
    /* eslint-disable no-alert */
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio, location, login } = '', api } = this.state;

    const loginUser = (
      <div className="form">
        <form className="input-group justify-content-center">
          <input
            className="form-control"
            type="text"
            name="userName"
            onChange={ this.handleChange }
            placeholder="Digite seu nome usuário"
          />
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <a href={ api.html_url }>{ login }</a>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
        <p>{ location }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}

export default Profile;
