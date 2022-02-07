import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, FETCH_POST_EVENT, INIT_CLOSEST_EVENTS } from '../actionTypes/eventAT'

export const getPublicEvents = (payload) => {
  return {
    type: INIT_PUBLIC_EVENTS,
    payload
  }
}


export const getUsersEvents = (payload) => {
  return {
    type: INIT_USERS_EVENTS,
    payload
  }
}


export const addEventAC = (payload) => {
  return {
    type: FETCH_POST_EVENT,
    payload
  }
}

export const initClosestEventsAC = (payload) => {
  return {
    type: INIT_CLOSEST_EVENTS,
    payload,
  }
}
