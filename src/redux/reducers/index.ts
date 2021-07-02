  
import { combineReducers } from 'redux';
import { usersReducer, UsersStoreState } from './users';

export interface StoreState {
  usersState: UsersStoreState
}

export const reducers = combineReducers<StoreState>({
	usersState: usersReducer
});