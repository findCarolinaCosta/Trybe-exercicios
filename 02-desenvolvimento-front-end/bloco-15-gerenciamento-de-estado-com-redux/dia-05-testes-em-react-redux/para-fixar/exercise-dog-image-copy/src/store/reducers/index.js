import { combineReducers } from 'redux';
import DogAPiReducer from './DogApiReducer';

const rootReducers = combineReducers({ dogInfos: DogAPiReducer });

export default rootReducers;
