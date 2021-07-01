import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {User, fetchUsers} from '../redux/actions';
import {StoreState} from '../redux/reducers';


interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App ({users, fetchUsers}:AppProps){

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
		<div>
			<button onClick={fetchUsers}>FETCH USERS!</button>
			{users.map((user: User) => {
				return (
					<div key={user.id}>
						{user.id}) {user.name}
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, {fetchUsers})(App);