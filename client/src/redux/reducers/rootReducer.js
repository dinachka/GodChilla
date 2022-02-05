import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { eventsReducer } from '../reducers/eventsReducer.js'



export const rootReducer = combineReducers({
  userReducer,
  eventsReducer
})
