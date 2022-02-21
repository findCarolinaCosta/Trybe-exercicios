import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <h1>Bem Vindos</h1>
        <section>
          <Link to="/login">LOGIN</Link>
        </section>
      </div>
    );
  }
}

export default Header;