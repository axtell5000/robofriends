import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from './constants';


const initialStateSearch = {
  searchField: ''
};

// Reducers take an action and interact with the state. State is read only. When changing we are making copies
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // assign - making a copy of object. The spread operator ... does the same thing as assign
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOT_PENDING:
      // assign - making a copy of object. The spread operator ... does the same thing as assign
      return Object.assign({}, state, {isPending: true});
    case REQUEST_ROBOT_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false});
    case REQUEST_ROBOT_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;
  }
};
