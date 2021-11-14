import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  render() {
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        <Profile />
        <Connections />
      </div>
    );
  }
}

export default App;
