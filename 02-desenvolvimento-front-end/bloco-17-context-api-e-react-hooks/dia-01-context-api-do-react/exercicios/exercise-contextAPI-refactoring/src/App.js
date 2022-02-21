import React from 'react';
import './App.css';
import Cars from './Cars';
import Context from './Context';
import moveCar from './moveCar';
import changeSignal from './changeSignal';
import TrafficSignal from './TrafficSignal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signalColor: {
        color: 'red',
      }
    }
    this.moveCar = moveCar.bind(this);
    this.changeSignal = changeSignal.bind(this);
  }
  render() {
  const initialState = {
    ...this.state,
    moveCar: this.moveCar,
    changeSignal: this.changeSignal,
  };
  return (
    <>
      <Context.Provider value={initialState}>
        <TrafficSignal />
        <Cars />
      </Context.Provider >
    </>
  );
  }
}

export default App;
