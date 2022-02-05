import { INIT_EVENTS_FETCH } from '../actionTypes/eventAT.js';

const initialState = { events: [] }

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_EVENTS_FETCH:
      const { events } = action.payload
      return { ...state, events: events }
    default:
      return state
  }
}
