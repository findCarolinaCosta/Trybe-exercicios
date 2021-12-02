// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './Context';

const INITIAL_STATE = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
}

const SIGNAL = {
  color: 'red',
}

function Provider({children}) {
  const [cars, setCars] = useState(INITIAL_STATE);
  const [signal, setSignal] = useState(SIGNAL)

  function moveCar(car, side) {
    setCars({ ...cars, [car]: side });
  };

  function changeSignal(signalColor) {
    setSignal({ ...signal, color: signalColor });
  };

    const context = {
      cars,
      moveCar,
      signal,
      changeSignal,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
