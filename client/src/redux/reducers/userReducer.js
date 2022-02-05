import { ADD_USER, INIT_USER, DELETE_USER } from "../actionTypes/userAT"

const initialState = { user: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload }

    case INIT_USER:
      return { ...state, user: action.payload }

    case DELETE_USER: 
      return {...state, user: {}}
      
    default:
      return state
  }
}
