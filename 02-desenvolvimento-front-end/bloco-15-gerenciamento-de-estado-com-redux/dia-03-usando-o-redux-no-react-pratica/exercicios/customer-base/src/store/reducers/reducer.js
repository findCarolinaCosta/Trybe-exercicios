import LOGIN from '../action/index'

const INITIAL_STATE = {};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return action.state;
    default:
      return state;
  }
}