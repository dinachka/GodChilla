import { INIT_EVENTS_FETCH } from '../actionTypes/eventAT.js';

const initialState = { events: [] }

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_EVENTS_FETCH:
      return { ...state, events: action.payload }
    default:
      return state
  }
}
