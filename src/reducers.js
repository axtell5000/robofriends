import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: ''
};

// Reducers take an action and interact with the state. State is read only. When changing we are making copies
export const searchRobots = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // assign - making a copy of object. The spread operator ... does the same thing as assign
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
};
