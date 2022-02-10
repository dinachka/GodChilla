import { INIT_FRIENDS, ADD_FRIENDSHIP, INIT_FRIENDS_REQUEST_NOTIFICATIONS, ACCEPT_FRIENDSHIP, REJECT_FRIENDSHIP, DELETE_FRIENDSHIP } from "../actionTypes/friendsAT"

const initialState = { friends: [], notifications: [] }

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_FRIENDS:
      return { ...state, friends: action.payload }
    case ADD_FRIENDSHIP:
      return { ...state, friends: action.payload }
    case INIT_FRIENDS_REQUEST_NOTIFICATIONS:
      return { ...state, notifications: action.payload }
    case ACCEPT_FRIENDSHIP:
      return { ...state, notifications: [...state.notifications].filter((el) => el.id !== action.payload) }
    case REJECT_FRIENDSHIP:
      return { ...state, notifications:  [...state.notifications].filter((el) => el.id !== action.payload) }
    case DELETE_FRIENDSHIP:
      return { ...state, friends: state.friendship?.filter(el => (el.reqUserID !== action.payload) && (el.resUserID !== action.payload))}
    default:
      return state
  }
}
