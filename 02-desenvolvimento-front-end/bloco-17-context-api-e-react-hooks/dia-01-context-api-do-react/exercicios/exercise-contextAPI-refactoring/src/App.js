import React from 'react';
import './App.css';
import Cars from './Cars';
import Context from './Context';
import moveCar from './moveCar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    }
    this.moveCar = moveCar.bind(this);
  }
  render() {
  const initialState = {
    ...this.state,
    moveCar: this.moveCar,
  };
  return (
    <>
      <Context.Provider value={initialState}>
        <Cars />
      </Context.Provider >
    </>
  );
  }
}

export default App;
