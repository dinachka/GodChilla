import { EVENTS_REQUESTS_NOTIFICATIONS_FETCH, ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH, REJECT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH, FETCH_EDIT_EVENT, FETCH_JOIN_EVENT, FETCH_CANCEL_JOIN_EVENT, INIT_OTHER_EVENTS_ON_PROFILE_FETCH, CANCEL_FOREIGN_EVENT_ON_PROFILE_FETCH, INIT_PAST_EVENTS_ON_PROFILE_FETCH } from '../actionTypes/eventAT'


export const eventsRequestsNotificationsAsyncAC = (payload) => {
  return {
    type: EVENTS_REQUESTS_NOTIFICATIONS_FETCH,
    payload,
  }
}

export const editEventFetchAC = (payload) => {
  return {
    type: FETCH_EDIT_EVENT,
    payload,
  }
}

export const joinEventFetchAC = (payload) => {
  return {
    type: FETCH_JOIN_EVENT,
    payload,
  }
}


export const acceptEventsRequestsNotificationsAsyncAC = (payload) => {
  return {
    type: ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH,
    payload,

  }
}

export const rejectEventsRequestsNotificationsAsyncAC = (payload) => {
  return {
    type: REJECT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH,
    payload,

  }
}

export const cancelJoinEventFetchAC = (payload) => {
  return {
    type: FETCH_CANCEL_JOIN_EVENT,
    payload,
  }
}

export const initOtherEventsOnProfileAsyncAC = (payload) => {
  return {
    type: INIT_OTHER_EVENTS_ON_PROFILE_FETCH,
    payload,
  }
}



export const cancelForeignEventsOnProfileAsyncAC = (payload) => {
  return {
    type: CANCEL_FOREIGN_EVENT_ON_PROFILE_FETCH,
    payload,
  }
}


export const initPastEventsOnProfileAsyncAC = (payload) => {
  return {
    type: INIT_PAST_EVENTS_ON_PROFILE_FETCH,
    payload
  }
}

