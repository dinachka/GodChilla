import { ADD_USER, INIT_USER, DELETE_USER, INIT_ANOTHER_USER } from "../actionTypes/userAT"

const initialState = { user: {}, anotherUser: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload }

    case INIT_USER:
      return { ...state, user: action.payload }

    case DELETE_USER: 
      return {...state, user: {}}

    case INIT_ANOTHER_USER:
      console.log(action.payload);
      return {...state, anotherUser: action.payload }
      
    default:
      return state
  }
}
