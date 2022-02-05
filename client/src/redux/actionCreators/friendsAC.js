import { INIT_FRIENDS } from "../actionTypes/friendsAT";

export const initFriendsAC = (payload) => {
  return {
    type: INIT_FRIENDS,
    payload,
  }
}
