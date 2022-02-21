import { CHANGE_SIGNAL } from '../redux/actionCreators';

const INITIAL_STATE = {
  signal: {
    color: 'red'
  },
}

function TrafficSignalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      signal: {
        ...state,
        color: action.payload
      }
    };
  default:
    return state;
  }
}

export default TrafficSignalReducer;