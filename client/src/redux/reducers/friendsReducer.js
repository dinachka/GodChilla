import { INIT_FRIENDS } from "../actionTypes/friendsAT"

const initialState = { friends: {} }

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FRIENDS:
      return { ...state, friends: action.payload }
    default:
      return state
  }
}
