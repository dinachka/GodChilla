import { FETCH_EDIT_EVENT } from '../actionTypes/eventAT'

export const editEventFetchAC = (payload) => {
  return {
    type: FETCH_EDIT_EVENT,
    payload,
  }
}
