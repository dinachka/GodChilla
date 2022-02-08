import { EVENTS_REQUESTS_NOTIFICATIONS_FETCH, ACCEPT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH, REJECT_EVENTS_REQUESTS_NOTIFICATIONS_FETCH } from '../actionTypes/eventAT'

export const eventsRequestsNotificationsAsyncAC = (payload) => {
  return {
    type: EVENTS_REQUESTS_NOTIFICATIONS_FETCH,
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

