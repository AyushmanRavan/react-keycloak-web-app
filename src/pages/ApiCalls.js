import React, {useEffect,useState} from 'react';
import apiService from '../services/http-api'


function ApiCalls(props) {
   
    const options = [
        { label: 'ADMIN', value: '/admin' },
        { label: 'USER', value: '/user' },
        { label: 'BOTH', value: '/all-user' },
        { label: 'PUBLIC', value: '/unsecured' },
      ];
      const [value, setValue] = useState('/unsecured');
      const [post, setPost] = useState(null);

      const handleChange = (event) => {
        setValue(event.target.value);
      };

    useEffect(() => {
      apiService.getRequest(value).then((response) => {
          setPost(response.data);
        });
      }, [value]);

      if (!post) return null;

    return (
        <div>
             <label> What you can access.?
                <select value={value} onChange={handleChange}>
                {/* <option value="/admin-v1">ADMIN</option>
                <option value="/all-user-v1">BOTH</option>
                <option value="/user-v1">USER</option> */}
                {
                  options.map((option) => ( <option value={option.value} key={option.value}>{option.label}</option> ))
                }
                </select>
             </label>
            <br/>
            <p>Message: {post.message}</p>
        </div>
    );
}

export default ApiCalls;

// Realm Roles: Realm-level roles are a global namespace to define your roles.
// Client Roles: Client roles are basically a namespace dedicated to a client.(Client roles are managed under the Roles tab under each individual client.)
// Composite Roles: Any realm level or client level role can be turned into a composite role.
// http://dolszewski.com/spring/accessing-prototype-bean-in-singleton/


// client-id : spa-heroes-backend 
// 1) We’ve created client-level roles. heroes-user and heroes-admin
// 2) Let’s create realm-level roles.  app-user and app-admin
// 3) After realm saved, enable Composite Roles, Click on client roles and type spa-heroes-backend.Select heroes-user from the available roles and click on add selected.
    //Follow the same steps to create the app-admin user and assign heroes-admin
// This configuration will assign spa-heroes-backend heroes-user client role to the app-user realm role. If you have multiple clients with multiple roles, pick and choose the required roles from each client to create realm roles based on the need.
// user1 with app-user realm role
// user2 with app-admin realm role
// user3 with app-user & app-admin realm roles


// username: user1, Role: heroes-user
// username: user2, Role: heroes-admin
// username: user3, Role: heroes-user, heroes-admin