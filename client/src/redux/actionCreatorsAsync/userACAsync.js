import { REGISTRATION_FETCH } from '../actionTypes/userAT'
import { LOGIN_FETCH } from '../actionTypes/userAT'
export const registrationFetchAC = (payload) => {
  return {
    type: REGISTRATION_FETCH,
    payload
  }
}
export const loginFetchAC = (payload) => {
  return {
    type: LOGIN_FETCH,
    payload
  }
}
