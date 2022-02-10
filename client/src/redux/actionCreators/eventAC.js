
import { INIT_PUBLIC_EVENTS, INIT_USERS_EVENTS, DELETE_EVENT, INIT_CLOSEST_EVENTS, EVENTS_REQUESTS_NOTIFICATIONS, ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS, REJECT_EVENTS_REQUESTS_NOTIFICATIONS, EDIT_EVENT, JOIN_EVENT, CANCEL_JOIN_EVENT, INIT_OTHER_EVENTS_ON_PROFILE, CANCEL_FOREIGN_EVENT_ON_PROFILE, INIT_PAST_EVENTS_ON_PROFILE, POST_EVENT } from '../actionTypes/eventAT'

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
    type: POST_EVENT,
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

export const eventsRequestsNotificationsAC = (payload) => {
  return {
    type: EVENTS_REQUESTS_NOTIFICATIONS,
    payload,

  }
}

export const addParticipationAC = (payload) => {
  return {
    type: JOIN_EVENT,
    payload,

  }
}

export const cancelJoinEventAC = (payload) => {
  return {
    type: CANCEL_JOIN_EVENT,
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


export const initOtherEventsOnProfileAC = (payload) => {
  return {
    type: INIT_OTHER_EVENTS_ON_PROFILE,
    payload,
  }
}

export const cancelForeignEventOnProfileAC = (payload) => {
  return {
    type: CANCEL_FOREIGN_EVENT_ON_PROFILE,
    payload,
  }
}

export const initPastEventsOnProfileAC = (payload) => {
  return {
    type: INIT_PAST_EVENTS_ON_PROFILE,
    payload
  }
}
