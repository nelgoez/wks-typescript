import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
  id: number;
  title: string;
  body: string;
}

export interface FetchUserAction {
  type: ActionTypes.FETCH_USERS;
  payload: User[];
}

export interface DeleteUserAction {
  type: ActionTypes.DELETE_USERS;
  payload: number;
}

export interface LoadingAction {
  type: ActionTypes.LOADING_ACTION;
}

const url = 'https://localhost:3001/user'

export const fetchUsers = () => {
  return async (dispatch:  Dispatch) => {
    dispatch<LoadingAction>({
      type: ActionTypes.LOADING_ACTION
    })
    const response = await axios.get<User[]>(url);
    dispatch<FetchUserAction>({
      type: ActionTypes.FETCH_USERS,
      payload: response.data
    })
  };
};

export const deleteUser = (id: number): DeleteUserAction => {
  return {
    type: ActionTypes.DELETE_USERS,
    payload: id
  };
};