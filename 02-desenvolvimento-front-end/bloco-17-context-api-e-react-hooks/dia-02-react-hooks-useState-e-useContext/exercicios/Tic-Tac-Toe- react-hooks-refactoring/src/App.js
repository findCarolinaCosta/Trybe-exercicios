// src/App.js

import React from 'react';
import TicTacToe from './TicTacToe';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
  <Provider>
    <TicTacToe />;
  </Provider>
  );
}

export default App;
