import React from 'react';
// import { Link } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function UserItem({user, url, deleteUser, updateUser}) {
    const navigate = useNavigate();
    return (
        <tr key={user.id}>
             <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
                {/* <Link to={"/users/" + user.username}>Edit</Link> */}
                <button size="sm" color="danger" onClick={() => deleteUser(user.username)}>Delete</button>
                <button size="sm" color="danger" onClick={() => navigate(`/${url}/${user.username}`)}>Edit</button>
                {/* <button size="sm" color="danger" onClick={() => updateUser(user.username)}>Edit</button> */}
            </td>
        </tr>
    );
}

export default UserItem;