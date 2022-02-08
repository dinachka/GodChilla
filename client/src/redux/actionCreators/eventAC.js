
import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, FETCH_POST_EVENT, DELETE_EVENT, INIT_CLOSEST_EVENTS, EDIT_EVENT, JOIN_EVENT } from '../actionTypes/eventAT'


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


export const deleteEventAC = (payload) => {
  return {
    type: DELETE_EVENT,
    payload 
  }
}


export const editEventAC = (payload) => {
  return {
    type: EDIT_EVENT,
    payload 
  }
}


export const initClosestEventsAC = (payload) => {
  return {
    type: INIT_CLOSEST_EVENTS,
    payload,

  }
}

export const addParticipationAC = (payload) => {
  return {
    type: JOIN_EVENT,
    payload,

  }
}


