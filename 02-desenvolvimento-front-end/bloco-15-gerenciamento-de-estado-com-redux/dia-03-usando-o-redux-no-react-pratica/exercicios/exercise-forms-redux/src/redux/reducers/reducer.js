import { STATE_PERSONALFORM, STATE_PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {
  payload: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STATE_PERSONALFORM:
    return {
      ...state,
      payload: {
        ...state.payload,
        personalForm: action.payload.personalForm,
      } };
  case STATE_PROFESSIONAL:
    return ({
      ...state,
      payload: {
        ...state.payload,
        professional: action.payload.professional,
      } });
  default:
    return state;
  }
}
