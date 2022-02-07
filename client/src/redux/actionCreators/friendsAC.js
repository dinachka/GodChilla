import { INIT_FRIENDS, ADD_FRIENDSHIP, INIT_FRIENDS_REQUEST_NOTIFICATIONS } from "../actionTypes/friendsAT";

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


