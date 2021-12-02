// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const INITIAL_STATE = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
}

function Provider({children}) {
  const [cars, setCars] = useState(INITIAL_STATE);

  function moveCar(car, side) {
    setCars({ ...cars, [car]: side })
  };

    const context = {
      cars,
      moveCar,
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
