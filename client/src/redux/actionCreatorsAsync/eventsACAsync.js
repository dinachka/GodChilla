import { EVENTS_REQUESTS_NOTIFICATIONS_FETCH } from '../actionTypes/eventAT'
export const eventsRequestsNotificationsAsyncAC = (payload) => {
  return {
    type: EVENTS_REQUESTS_NOTIFICATIONS_FETCH,
    payload,

  }
}

