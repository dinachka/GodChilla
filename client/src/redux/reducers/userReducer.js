import { ADD_USER, INIT_USER, DELETE_USER, INIT_ANOTHER_USER, SAVE_AVATAR } from "../actionTypes/userAT"

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

    case SAVE_AVATAR:
      console.log(action.payload);
      return {
        ...state, user: {
          ...state.user,
          photo: action.payload,
        }
      }

    default:
      return state
  }
}
