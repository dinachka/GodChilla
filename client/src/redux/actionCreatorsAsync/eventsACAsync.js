import { EVENTS_REQUESTS_NOTIFICATIONS_FETCH, FETCH_EDIT_EVENT, FETCH_JOIN_EVENT, FETCH_CANCEL_JOIN_EVENT } from '../actionTypes/eventAT'

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

export const cancelJoinEventFetchAC = (payload) => {
  return {
    type: FETCH_CANCEL_JOIN_EVENT,
    payload,
  }
}
