const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
      case 'NEW_ACTION':
        console.log(action.value);
        return [...state, action.state]
    default:
      return state;
  }
}

export default listReducer;