import { REGISTRATION_FETCH } from '..actionTypes/userAT'
export const registrationFetchAC = (payload) => {
  return {
    type: REGISTRATION_FETCH,
    payload
  }
}
