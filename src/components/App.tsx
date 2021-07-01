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

    return <div>{users[0]}</div>
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, {fetchUsers})(App);