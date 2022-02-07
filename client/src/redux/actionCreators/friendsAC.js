import { INIT_FRIENDS, ADD_FRIENDSHIP } from "../actionTypes/friendsAT";

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
