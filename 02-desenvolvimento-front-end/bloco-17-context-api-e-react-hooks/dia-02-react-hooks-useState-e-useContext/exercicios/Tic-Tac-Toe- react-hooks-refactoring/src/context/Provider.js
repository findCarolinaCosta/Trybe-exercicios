// src/context/Provider.js

import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({children}) {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const context = {
    activePlayer,
    setActivePlayer,
    gameBoard,
    setGameBoard,
  };

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
