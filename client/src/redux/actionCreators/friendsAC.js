import { INIT_FRIENDS, ADD_FRIENDSHIP, INIT_FRIENDS_REQUEST_NOTIFICATIONS, ACCEPT_FRIENDSHIP, REJECT_FRIENDSHIP, DELETE_FRIENDSHIP } from "../actionTypes/friendsAT";

export const initFriendsAC = (payload) => {
  return {
    type: INIT_FRIENDS,
    payload,
  }
}

export const addFriendshipAC = (payload) => {
  return {
    type: ADD_FRIENDSHIP,
    payload,
  }
}

export const initFriendsRequestNotificatiosnAC = (payload) => {
  return {
    type: INIT_FRIENDS_REQUEST_NOTIFICATIONS,
    payload
  }
}

export const acceptFriendshipAC = (payload) => {
  return {
    type: ACCEPT_FRIENDSHIP,
    payload
  }
}


export const rejectFriendshipAC = (payload) => {
  return {
    type: REJECT_FRIENDSHIP,
    payload,
  }
}

export const deleteFriendAC = (payload) => {
  return {
    type: DELETE_FRIENDSHIP,
    payload,
  }
}
