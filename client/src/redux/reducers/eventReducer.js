import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, INIT_CLOSEST_EVENTS, DELETE_EVENT } from "../actionTypes/eventAT"

const initialState = { events: {}, userEvents: {}, closesEvents: {} }

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PUBLIC_EVENTS:
      return { ...state, events: action.payload.events }
      
      case INIT_USERS_EVENTS:
        console.log(action.payload, 'action.payload');
        return { ...state, userEvents: action.payload.events 
        }
    case DELETE_EVENT:
      return { ...state, userEvents: action.payload.events}

    case INIT_CLOSEST_EVENTS:
      return { ...state, closesEvents: action.payload }

    default:
      return state
  }
}
