import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { friendsReducer } from "./friendsReducer";
import { eventReducer } from "./eventReducer";
import { userListReducer } from "./userListReducer";
import { eventsReducer } from '../reducers/eventsReducer.js'



export const rootReducer = combineReducers({
  userReducer,
  friendsReducer,
  eventReducer,
  userListReducer,
  eventsReducer
})
