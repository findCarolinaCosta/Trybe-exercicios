import { 
    REQUEST_CHARACTER_API, 
    REQUEST_CHARACTER_API_RESOLVE, 
    REQUEST_CHARACTER_API_REJECT } from '../actions/';

const INITIAL_STATE = { loading: false }

export default function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CHARACTER_API:
       return { ...state, loading: true }
    case REQUEST_CHARACTER_API_RESOLVE:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      }
      case REQUEST_CHARACTER_API_REJECT:
        return { 
          ...state, 
          loading: false,
          error: action.error,
        }
      default:
        return state;
  }
}
