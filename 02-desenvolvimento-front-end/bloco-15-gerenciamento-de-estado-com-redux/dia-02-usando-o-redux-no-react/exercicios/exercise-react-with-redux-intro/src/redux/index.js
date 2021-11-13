import { combineReducers, createStore } from 'redux';
import CarsReducer from '../reducers/CarsReducer';
import TrafficSignalReducer from '../reducers/TrafficSignalReducer';

const reducer = combineReducers({
  CarsReducer,
  TrafficSignalReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;