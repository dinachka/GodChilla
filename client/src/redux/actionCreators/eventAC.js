import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS } from '../actionTypes/eventAT'
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
