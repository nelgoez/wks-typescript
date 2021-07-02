import { User } from '../actions';
import { ActionTypes,  Action } from '../actions/types';

export interface UsersStoreState {
  users: User[];
  loading: boolean;
}

const initialState: UsersStoreState = {
  users: [],
  loading: false
};

export const usersReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case ActionTypes.DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((user: User) => user.id !== action.payload),
        loading: false
      }
    case ActionTypes.LOADING_ACTION:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};