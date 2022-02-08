import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, INIT_CLOSEST_EVENTS, DELETE_EVENT, EVENTS_REQUESTS_NOTIFICATIONS, EDIT_EVENT, JOIN_EVENT, CANCEL_JOIN_EVENT } from "../actionTypes/eventAT"

const initialState = { events: {}, userEvents: {}, closesEvents: {}, notifications: {}}

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

    case EVENTS_REQUESTS_NOTIFICATIONS:
      return { ...state, notifications: action.payload}
      
    case EDIT_EVENT:
      return { ...state, userEvents: action.payload.events }

    case JOIN_EVENT:
      return { ...state, events: state.events.map( el => el.id === action.payload.eventID ? 
        {...el, status: 'В обработке'} : el)}

    case CANCEL_JOIN_EVENT:
      return { ...state, events: state.events.map( el => el.id === action.payload.eventID ? 
        {...el, status: 'Запрос отменен'} : el)}   

    default:
      return state
  }
}
