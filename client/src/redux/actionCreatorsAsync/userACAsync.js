import { REGISTRATION_FETCH, LOGIN_FETCH, LOGOUT_FETCH, INIT_USERSLIST_FETCH,GLOBAL_LOGIN_FETCH, INIT_ANOTHER_USER_FETCH, INIT_ANOTHER_USER_EVENTS_FETCH } from '../actionTypes/userAT'

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

export const globalLoginFetchAC = () => {
  return {
    type: GLOBAL_LOGIN_FETCH,
  }
}

export const logoutFetchAC = () => {
  return {
    type: LOGOUT_FETCH,
  }
}

export const initUserslistFetchAC = (payload) => {
  return {
    type: INIT_USERSLIST_FETCH,
    payload,
  }
}

export const initAnotherUserFetchAC = (payload) => {
  return {
    type: INIT_ANOTHER_USER_FETCH,
    payload,
  }
}

export const initAnotherUserEventsFetchAC = (payload) => {
  return {
    type: INIT_ANOTHER_USER_EVENTS_FETCH,
    payload,
  }
}
