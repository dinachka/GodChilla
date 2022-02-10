import { ADD_USER, INIT_USER, DELETE_USER, INIT_ANOTHER_USER, SAVE_AVATAR, INIT_ANOTHER_USER_EVENTS } from "../actionTypes/userAT"

const initialState = { user: {}, anotherUser: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload }

    case INIT_USER:
      return { ...state, user: action.payload }

    case DELETE_USER:
      return { ...state, user: {} }

    case INIT_ANOTHER_USER:
      return { ...state, anotherUser: action.payload }

    case INIT_ANOTHER_USER_EVENTS:
      return { ...state, anotherUser: {...state.anotherUser, events:action.payload} }

    case SAVE_AVATAR:
      return {
        ...state, user: {
          ...state.user,
          photo: action.payload,
        }
      }
    case "CHANGE_FRIEND_STATUS_ADD":
      return { ...state, anotherUser: {...state.anotherUser, friendship: 'Подтвержден'} }
    default:
      return state
  }
}
