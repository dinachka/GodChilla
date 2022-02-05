import { INIT_EVENTS_FETCH } from '../actionTypes/eventAT.js';

export const initEventsAC = (payload) => {
  return {
    type: INIT_EVENTS_FETCH,
    payload,
  }
}
