import { FetchUserAction, DeleteUserAction, LoadingAction } from './index';

export enum ActionTypes {
  FETCH_USERS='FETCH_USERS',
  DELETE_USERS='DELETE_USERS',
  LOADING_ACTION='LOADING_ACTION'
}

export type Action = FetchUserAction | DeleteUserAction | LoadingAction;