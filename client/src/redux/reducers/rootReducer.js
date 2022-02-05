import { combineReducers } from 'redux';
import { eventsReducer } from '../reducers/eventsReducer.js'

export const rootReducer = combineReducers({
  eventsReducer,
});
