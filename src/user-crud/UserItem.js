import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../redux/user/user.actions'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// deconstructed props
function UserItem({userDetails, url, handleDelete, handleUpdate}) {
    const navigate = useNavigate();
    return (
        <tr key={userDetails.id}>
            <td>{userDetails.username}</td>
            <td>{userDetails.firstName}</td>
            <td>{userDetails.lastName}</td>
            <td>
                {/* <Link to={"/users/" + userDetails.username}>Edit</Link> */}
                <button size="sm" color="danger" onClick={() => deleteUser(userDetails.username)}>Delete</button>
                <button size="sm" color="danger" onClick={() => navigate(`/${url}/${userDetails.username}`)}>Edit</button>
                {/* <button size="sm" color="danger" onClick={() => handleUpdate(userDetails.username)}>Edit</button> */}
            </td>
        </tr>
    );
}

export default UserItem;