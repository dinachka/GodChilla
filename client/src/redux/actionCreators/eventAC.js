
import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, FETCH_POST_EVENT, DELETE_EVENT, INIT_CLOSEST_EVENTS, EVENTS_REQUESTS_NOTIFICATIONS, ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS, REJECT_EVENTS_REQUESTS_NOTIFICATIONS } from '../actionTypes/eventAT'


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

export const initClosestEventsAC = (payload) => {
  return {
    type: INIT_CLOSEST_EVENTS,
    payload,

  }
}


export const eventsRequestsNotificationsAC = (payload) => {
  return {
    type: EVENTS_REQUESTS_NOTIFICATIONS,
    payload,

  }
}

export const acceptEventsRequestsNotificationsAC = (payload) => {
  return {
    type: ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS,
    payload,

  }
}

export const rejectEventsRequestsNotificationsAC = (payload) => {
  return {
    type: REJECT_EVENTS_REQUESTS_NOTIFICATIONS,
    payload,

  }
}
