import {
  INIT_USER,
  DELETE_USER,
  INIT_ANOTHER_USER,
  SAVE_AVATAR,
  NEW_MESSAGE,
} from '../actionTypes/userAT';
import { ADD_USER, INIT_ANOTHER_USER_EVENTS } from "../actionTypes/userAT"

const initialState = { user: {}, anotherUser: {}, newMessages: 0 };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload };

    case INIT_USER:
      return { ...state, user: action.payload };

    case DELETE_USER:
      return { ...state, user: {} };

    case INIT_ANOTHER_USER:
      return { ...state, anotherUser: action.payload };

    case INIT_ANOTHER_USER_EVENTS:
      return { ...state, anotherUser: {...state.anotherUser, events:action.payload} }

    case SAVE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          photo: action.payload,
        }
      }
    case "CHANGE_FRIEND_STATUS_ADD":
      return { 
        ...state, 
        anotherUser: {
          ...state.anotherUser, 
          friendship: 'В обработке'
        }
      }
    case "CHANGE_FRIEND_STATUS_DELETE":
      return { ...state, 
        anotherUser: {
          ...state.anotherUser, 
          friendship: 'Не друзья'
        }
      }
       case NEW_MESSAGE:
      return { ...state, newMessages: state.newMessages + 1 };
    default:
      return state;
  }
};
