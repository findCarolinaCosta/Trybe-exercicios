import { createStore, combineReducers, compose } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose(extension));

export default store;