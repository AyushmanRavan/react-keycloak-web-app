import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from '../redux/user/user.actions'
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Get the users from the store
  const stateData = useSelector((state) => state.users);
  // Pull the users properties
  const { users, status, error } = stateData;

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
    }
  }, [dispatch]);

  const handleDelete = (username) => {
    dispatch(deleteUser(username));
  }

  const handleUpdate = (username) => {
    navigate(`/users-add-update/${username}`)
  }
  
// const handleClick = () => navigate('/goodbye');   //go back = navigate(-1)        go forward = navigate(1)
  if (status === 'pending') {
    return ( <div className="loader">Loading...</div> )
  } else if (status === 'fulfilled') {
    // Sort the users by id in descending order
    const sortedData = users.slice().sort((a, b) => b.id - a.id)
    // Map through the sorted users and display them
    const tableData = sortedData.map((user,index) => {
      return (
              <tr key={index}>
                {/* <td>{index+1}</td> */}
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                    <Link to={"/users-add-update/" + user.username}>Edit</Link>
                    <button size="sm" color="danger" onClick={() => handleDelete(user.username)}>Delete</button>
                </td>
              </tr>
             )
    });
   
    return (
      <>
        <div className="float-right">
          <Link to="/users-add-update/new">Add User</Link>
        </div>
        <table className="mt-4">
          <thead>
            <tr>
              {/* <th>S.N</th> */}
              <th width="10%">User Name</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody>  
            {tableData}
          </tbody>  
        </table>    
      </>
    )

  } else {
    // Display the error message
    return <div>{error} done.</div>
  }
};

    
//       componentDidMount() {
//         this.setState({isLoading: true});
//         // fetchUsersList();
//         fetch('http://localhost:8081/api/keycloak/users-list')
//           .then(response => response.json())
//           .then(data => this.setState({users: data, isLoading: false}));
//       }
//       // fetchUsersList = () => {}
//       // handleDelete = (postId) => {}
//       async deleteUser(username) {
//         await fetch(`http://localhost:8081/api/keycloak/delete-user?username=${username}`, {
//           method: 'DELETE',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           }
//         }).then(() => {
//           let deleteUser = [...this.state.users].filter(item => item.username !== username);
//           this.setState({users: deleteUser});
//         });
//       }
    
//       render() {
//         const {users, isLoading} = this.state;
    
//         if (isLoading) {
//           return <p>Loading...</p>;
//         }
    
//         const usersList = users.map(user => {
//           return <tr key={user.id}>
//              <td>{user.username}</td>
//             <td>{user.firstName}</td>
//             <td>{user.lastName}</td>
//             <td>
//                 <Link to={"/users/" + user.username}>Edit</Link>
//                 <button size="sm" color="danger" onClick={() => this.deleteUser(user.username)}>Delete</button>
//             </td>
//           </tr>
//         });
    
//         return (
//           <div>
//               <div className="float-right">
//                 <Link to="/users/new">Add User</Link>
//               </div>
//               <h3>User List</h3>
//               <table className="mt-4">
//                 <thead>
//                   <tr>
//                   <th width="10%">User Name</th>
//                     <th width="20%">First Name</th>
//                     <th width="20%">Last Name</th>
//                     <th width="10%">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {usersList}
//                 {/* {
//                     users.map((user,index) => <UserItem key={index} userDetails={user} url={"/users/"} handleUpdate={handleUpdate} handleUpdate={handleUpdate} />)
//                 } */}
//                 </tbody>
//               </table>
//           </div>
//         );
//       }
// }


// async componentDidMount() {
//   if (this.props.params.userId !== 'new') {
//     const users = await (await fetch(`http://localhost:8081/api/keycloak/user-by-name?username=${this.props.params.userId}`)).json();
//     this.setState({item: users});
//   }
// }



export default UserList;