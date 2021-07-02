import React from 'react';
import { connect } from 'react-redux';
import { User, fetchUsers, deleteUser } from '../redux/actions';
import { StoreState } from '../redux/reducers';
import { UsersStoreState } from '../redux/reducers/users'

interface AppProps {
  users: User[];
  loading: boolean;
  fetchUsers(): any;
  deleteUser: typeof deleteUser;
}

function App(props:AppProps) {
  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {
        props.loading
          ? <div> Loading... </div>
          :
        props.users.map((user: User) => {
          return (
            <div key={user.id}>
              {user.id}) {user.title} <button onClick={() => props.deleteUser(user.id)}>X</button>
            </div>
          );
        })
      }
    </div>
  );
}

const mapStateToProps = (state: StoreState): UsersStoreState => {
  return {
    users: state.usersState.users,
    loading: state.usersState.loading
  };
}

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser }
)(App)