import React, { useState } from 'react';

function AddUpdate(props) {
  const [state, setState] = useState({ username: ''})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your name::</label>
          <input id="username" value={state.username} onChange={handleChange} type="text" name="username"/>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default AddUpdate;







// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class addUpdate extends Component {

//     constructor(props) {
//         super(props);

//     }

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentWillReceiveProps(nextProps) {

//     }

//     shouldComponentUpdate(nextProps, nextState) {

//     }

//     componentWillUpdate(nextProps, nextState) {

//     }

//     componentDidUpdate(prevProps, prevState) {

//     }

//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// addUpdate.propTypes = {

// };

// export default addUpdate;



// {
//   "realm": "vbot-realm",
//   "auth-server-url": "http://localhost:8080/auth/",
//   "ssl-required": "external",
//   "resource": "vbot-web",
//   "public-client": true,
//   "verify-token-audience": true,
//   "use-resource-role-mappings": true,
//   "confidential-port": 0
// }