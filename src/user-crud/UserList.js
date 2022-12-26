import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], isLoading: true};
        this.deleteUser = this.deleteUser.bind(this);
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
        // fetchUsersList();
        fetch('http://localhost:8081/api/keycloak/users-list')
          .then(response => response.json())
          .then(data => this.setState({users: data, isLoading: false}));
      }
      // fetchUsersList = () => {}
      // handleDelete = (postId) => {}
      async deleteUser(username) {
        await fetch(`http://localhost:8081/api/keycloak/delete-user?username=${username}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let deleteUser = [...this.state.users].filter(item => item.username !== username);
          this.setState({users: deleteUser});
        });
      }
    
      render() {
        const {users, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        const usersList = users.map(user => {
          return <tr key={user.id}>
             <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
                <Link to={"/users/" + user.username}>Edit</Link>
                <button size="sm" color="danger" onClick={() => this.deleteUser(user.username)}>Delete</button>
            </td>
          </tr>
        });
    
        return (
          <div>
              <div className="float-right">
                <Link to="/users/new">Add User</Link>
              </div>
              <h3>User List</h3>
              <table className="mt-4">
                <thead>
                  <tr>
                  <th width="10%">User Name</th>
                    <th width="20%">First Name</th>
                    <th width="20%">Last Name</th>
                    <th width="10%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {usersList}
                {/* {
                    users.map(user => <UserItem key={user.id} user={user} url={"/users/"} deleteUser={deleteUser} updateUser={updateUser} />)
                } */}
                </tbody>
              </table>
          </div>
        );
      }
}


export default UserList;