import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import withRouter from './../hooks/withRouter'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  fetchUser, createUser, updateUser } from '../redux/user/user.actions'

const CreateUpdateUser = () => {
 
  const [person, setPerson]=useState({
    firstName:"",
    username:"",
    lastName:"",
    password:""
  });//setPerson({...parson, lastName:e.target.value});
  const {userData,users,status,error} = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { userId } = useParams();

  useEffect(() => {
    if(userId !== 'new') {
      //  dispatch(fetchUser(userId));
      const singleUser = users.find((tour) => tour.username === userId);
      console.log(singleUser);
      setPerson({ ...singleUser });
    }
    return () => {
    }
  }, [userId,dispatch]);


  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let newPerson = {...person};
    newPerson[name] = value;
    setPerson({...newPerson});
    // setPerson({...person, name:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userId !== 'new') {
        dispatch(updateUser({payload:person,userId,navigate}));
    }else{
        dispatch(createUser({payload:person,navigate}));
        // navigate("/users-list");
    }
    // navigate('/users-list',{replace: true});
  }

  const handleCancel = () => navigate('/users-list');   

  return (
    <div>
      <h2>{person.id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" value={person.username}
                  onChange={handleChange} autoComplete="username"/>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" value={person.firstName}
                  onChange={handleChange} autoComplete="firstName"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={person.lastName}
                  onChange={handleChange} autoComplete="lastName"/>
        </div>  
        { (!person.id) ? <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={person.password}
                    onChange={handleChange} autoComplete="password"/>
            </div> : null }    
        <div>
          <button color="primary" type="submit">Save</button>{' '}
          <Link to="/users-list">Cancel</Link>
        </div>
      </form>
  </div>
  )
}
export default CreateUpdateUser;


// const myData = data.map(x => {
//   if (x.id === id) {
//       return {
//           ...x,
//           text: text,
//           day: day,
//           id: uuidv4()
//       }
//   }
//   return x;
// })










// class CreateUpdateUser extends Component {
//   emptyUsers = {
//     firstName: '',
//     lastName: '',
//     username: '',
//     password: ''
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       item: this.emptyUsers
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async componentDidMount() {
//     // var userId = this.props.params.id;
//     // console.log("id is :",this.props)
//     if (this.props.params.id !== 'new') {
//       const users = await (await fetch(`http://localhost:8081/api/keycloak/user-by-name?username=${this.props.params.id}`)).json();
//       this.setState({item: users});
//     }
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     let item = {...this.state.item};
//     item[name] = value;
//     this.setState({item});
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const {item} = this.state;
//     let url = '';
//     let method = '';
//     if(item.id){
//       url = "http://localhost:8081/api/keycloak/update-user"
//       method = 'PUT'
//     }else{
//       url = "http://localhost:8081/api/keycloak/create-user"
//       method = 'POST'
//     }

//     // if(this.state.id === '_add'){}else{}
//     await fetch(url, {
//       method: method,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(item),
//     });
//     // this.props.history.push('/users');
//     this.props.navigate('/users',{replace: true});
//   }

//   // getTitle(){
//   //   if(this.props.params.id !== 'new'){
//   //       return <h3 className="text-center">Edit User</h3>
//   //   }else{
//   //       return <h3 className="text-center">Add User</h3>
//   //   }
//   // }

//   // cancel(){
//   //     this.props.navigate('/users');
//   // }

//   render() {
//     const {item} = this.state;
//     const title = <h2>{item.id ? 'Edit User' : 'Add User'}</h2>;

//     return <div>
//         {title}
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="username">User Name</label>
//             <input type="text" name="username" id="username" value={item.username || ''}
//                    onChange={this.handleChange} autoComplete="username"/>
//           </div>
//           <div>
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" name="firstName" id="firstName" value={item.firstName || ''}
//                    onChange={this.handleChange} autoComplete="firstName"/>
//           </div>
//           <div>
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" name="lastName" id="lastName" value={item.lastName || ''}
//                    onChange={this.handleChange} autoComplete="lastName"/>
//           </div>  
//           { (!item.id) ? <div>
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" id="password" value={item.password || ''}
//                       onChange={this.handleChange} autoComplete="password"/>
//               </div> : null }    
//           <div>
//             <button color="primary" type="submit">Save</button>{' '}
//             <Link to="/users">Cancel</Link>
//           </div>
//         </form>
//     </div>
//   }
// }
// export default withRouter(CreateUpdateUser);