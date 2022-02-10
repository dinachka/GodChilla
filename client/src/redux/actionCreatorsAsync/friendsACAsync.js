import { INIT_FRIENDS_ASYNC, ADD_FRIENDSHIP_FETCH, INIT_FRIENDS_REQUEST_NOTIFICATIONS_ASYNC, ACCEPT_FRIENDSHIP_ASYNC, REJECT_FRIENDSHIP_ASYNC, DELETE_FRIENDSHIP_FETCH } from '../actionTypes/friendsAT'
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

export const initFriendsRequestNotificatiosnAsyncAC = (payload) => {
  return {
    type: INIT_FRIENDS_REQUEST_NOTIFICATIONS_ASYNC,
    payload,
  }
}


export const acceptFriendshipAsyncAC = (payload) => {
  return {
    type: ACCEPT_FRIENDSHIP_ASYNC,
    payload,
  }
}

export const rejectFriendshipAsyncAC = (payload) => {
  return {
    type: REJECT_FRIENDSHIP_ASYNC,
    payload,
  }
}

export const deleteFriendshipFetchAC = (payload) => {
  return {
    type: DELETE_FRIENDSHIP_FETCH,
    payload,
  }
}
