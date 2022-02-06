import { INIT_USERSLIST } from "../actionTypes/userAT"

const initialState = { users: [] }

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USERSLIST:
      return { ...state, users: action.payload }

      default: return state
  }
}
