// src/Cars.jsx

import React from 'react';
import Context from './Context';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  return (
    <Context.Consumer>
    {({ cars, moveCar  }) => (
    <div>
      <div>
        <img
          className={cars.redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red', !cars.redCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blue', !cars.blueCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow', !cars.yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
    )}
    </Context.Consumer>
  );
}
export default Cars;
