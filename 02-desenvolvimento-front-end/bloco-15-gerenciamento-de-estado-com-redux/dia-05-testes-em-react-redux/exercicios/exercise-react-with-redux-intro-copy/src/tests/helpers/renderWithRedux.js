import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react';
import CarsReducer from '../../reducers/CarsReducer';
import TrafficSignalReducer from '../../reducers/TrafficSignalReducer';
import '@testing-library/jest-dom';

const createMockStore = (initialState) => (
  createStore(combineReducers(
    {
    CarsReducer,
    TrafficSignalReducer,
  }
  ), 
    initialState
  )
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;
