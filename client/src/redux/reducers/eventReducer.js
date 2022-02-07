
import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, INIT_CLOSEST_EVENTS, DELETE_EVENT, EDIT_EVENT } from "../actionTypes/eventAT"

const initialState = { events: {}, userEvents: {}, closesEvents: {} }

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PUBLIC_EVENTS:
      return { ...state, events: action.payload.events }
      
    case INIT_USERS_EVENTS:
      return { ...state, userEvents: action.payload.events }

    case DELETE_EVENT:
      return { ...state, userEvents: action.payload.events }

    case INIT_CLOSEST_EVENTS:
      return { ...state, closesEvents: action.payload }

    case EDIT_EVENT:
      console.log(state.userEvents);
      return { ...state, userEvents: action.payload.events }

    default:
      return state
  }
}
