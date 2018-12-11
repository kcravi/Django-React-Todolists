import { combineReducers } from 'redux';

import { todolists } from '../modules/todolists'

let rootReducer = combineReducers({
  todolists
});

export default rootReducer;
