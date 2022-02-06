import { REGISTRATION_FETCH, LOGIN_FETCH, LOGOUT_FETCH, INIT_USERSLIST_FETCH } from '../actionTypes/userAT'


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

export const logoutFetchAC = () => {
  return {
    type: LOGOUT_FETCH,
  }
}

export const initUserslistFetchAC = () => {
  return {
    type: INIT_USERSLIST_FETCH,
  }
}
