import { INIT_FRIENDS_ASYNC } from '../actionTypes/friendsAT'
export const initFriendsFetchAC = (payload) => {
  return {
    type: INIT_FRIENDS_ASYNC,
    payload,
  }
}
