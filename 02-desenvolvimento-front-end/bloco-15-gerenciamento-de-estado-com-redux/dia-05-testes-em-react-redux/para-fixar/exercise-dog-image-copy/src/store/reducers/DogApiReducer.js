import { REQUEST_API, SAVE_DOG_INFO } from "../actions/actions";

const INITIAL_STATE = { loading: false, }

const DogAPiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, loading: true };
    case SAVE_DOG_INFO:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      }
    default:
      return state;
  }
}

export default DogAPiReducer;
