import { INIT_PUBLIC_EVENTS } from "../actionTypes/eventAT"

const initialState = { events: {} }

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PUBLIC_EVENTS:
      return { ...state, events: action.payload.events, friendsId: action.payload.friendsId }
    default:
      return state
  }
}
