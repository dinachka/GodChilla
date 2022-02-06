import { INIT_PUBLIC_EVENTS, FETCH_POST_EVENT } from '../actionTypes/eventAT'

export const getPublicEvents = (payload) => {
  return {
    type: INIT_PUBLIC_EVENTS,
    payload
  }
}

export const addEventAC = (payload) => {
  return {
    type: FETCH_POST_EVENT,
    payload
  }
}
