import { INIT_PUBLIC_EVENTS } from '../actionTypes/eventAT'
export const getPublicEvents = (payload) => {
  return {
    type: INIT_PUBLIC_EVENTS,
    payload
  }
}
