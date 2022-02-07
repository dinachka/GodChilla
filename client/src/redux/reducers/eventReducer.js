import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS } from "../actionTypes/eventAT"

const initialState = { events: {} }

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PUBLIC_EVENTS:
      return { ...state, events: action.payload.events, friendsId: action.payload.friendsId 

    case INIT_USERS_EVENTS: 
      return { ...state, userEvents: action.payload.events }
    default:
      return state
  }
}
