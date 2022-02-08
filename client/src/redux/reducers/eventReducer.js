import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, INIT_CLOSEST_EVENTS, DELETE_EVENT, EVENTS_REQUESTS_NOTIFICATIONS, ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS, REJECT_EVENTS_REQUESTS_NOTIFICATIONS } from "../actionTypes/eventAT"

const initialState = { events: {}, userEvents: {}, closesEvents: {}, notifications: [] }

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PUBLIC_EVENTS:
      return { ...state, events: action.payload.events }

    case INIT_USERS_EVENTS:
      return {
        ...state, userEvents: action.payload.events
      }
    case DELETE_EVENT:
      return { ...state, userEvents: action.payload.events }

    case INIT_CLOSEST_EVENTS:
      return { ...state, closesEvents: action.payload }

    case EVENTS_REQUESTS_NOTIFICATIONS:
      return { ...state, notifications: action.payload }

    case ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS:
      console.log(action.payload, 'action.payload');
      return { ...state, notifications: 
         state.notifications.participations.filter((el) => el.userID === action.payload) 
        }

    case REJECT_EVENTS_REQUESTS_NOTIFICATIONS:
      return { ...state, notifications: state.notifications.participations.filter((el) => el.userID !== action.payload.userID) }
    default:
      return state
  }
}
