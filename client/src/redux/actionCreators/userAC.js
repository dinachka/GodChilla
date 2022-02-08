import { ADD_USER, INIT_USER, DELETE_USER, INIT_USERSLIST, INIT_ANOTHER_USER } from '../actionTypes/userAT'
export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}

export const initUserAC = (payload) => {
  return {
    type: INIT_USER,
    payload
  }
}

export const deleteUserAC = (payload) => {
  return {
    type: DELETE_USER,
    payload
  }
}

export const initUserslistAC = (payload) => {
  return {
    type: INIT_USERSLIST,
    payload
  }
}

export const initAnotherUserAC = (payload) => {
  return {
    type: INIT_ANOTHER_USER,
    payload
  }
}
