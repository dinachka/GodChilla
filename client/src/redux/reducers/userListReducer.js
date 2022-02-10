import { INIT_USERSLIST, CLEAN_USERLIST } from "../actionTypes/userAT"

const initialState = { users: [] }

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USERSLIST:
      return { ...state, users: action.payload }

        case CLEAN_USERLIST:
          return { ...state, users: [] }
      default: return state
  }
}
