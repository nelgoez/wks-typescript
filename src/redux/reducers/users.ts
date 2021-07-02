import {User, FetchUsersAction} from '../actions/index';
import {ActionTypes} from '../actions/types';

export const usersReducer = (state: User[] = [], action: FetchUsersAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_USERS:
			return action.payload;
		default:
			return state;
	}
};