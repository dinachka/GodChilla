import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { friendsReducer } from "./friendsReducer";
import { eventReducer } from "./eventReducer";



export const rootReducer = combineReducers({
  userReducer,
  friendsReducer,
  eventReducer,
})
