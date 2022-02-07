import { INIT_FRIENDS, ADD_FRIENDSHIP, INIT_FRIENDS_REQUEST_NOTIFICATIONS } from "../actionTypes/friendsAT"

const initialState = { friends: {}, notifications: {} }

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_FRIENDS:
      return { ...state, friends: action.payload }
      case ADD_FRIENDSHIP:
        return { ...state, friends: action.payload }
        case INIT_FRIENDS_REQUEST_NOTIFICATIONS:
          return { ...state, notifications: action.payload }
    default:
      return state
  }
}
