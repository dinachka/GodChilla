import { INIT_FRIENDS_ASYNC, ADD_FRIENDSHIP_FETCH } from '../actionTypes/friendsAT'
export const initFriendsFetchAC = (payload) => {
  return {
    type: INIT_FRIENDS_ASYNC,
    payload,
  }
}

export const addFriendshipFetchAC = (payload) => {
  return {
    type: ADD_FRIENDSHIP_FETCH,
    payload,
  }
}
