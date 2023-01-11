import React, { Component } from 'react';
import UserInfo from './UserInfo';
// import Logout from './Logout';
import Keycloak from 'keycloak-js';
import ApiCalls from './ApiCalls'
// https://scalac.io/blog/user-authentication-keycloak-1/
// https://betweendata.io/posts/react-keycloak-authentication/
// https://www.keycloak.org/docs/latest/server_admin/index.html#webauthn_server_administration_guide
// https://www.ideas2it.com/blogs/a-deep-dive-into-asynchronous-programming-in-java-8/
// https://arnoldgalovics.com/
class SecuredORGA2 extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = new Keycloak('/ORGA2-keycloak.json'); //ORGA2-keycloak.json  //
    localStorage.setItem('Realm', "ORGA2")
    // var initSetting = { 
    //   onLoad: 'login-required',
    // }
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
      // storing input name
      localStorage.setItem('auth_token', keycloak.token)
     
    })
  }

  render() {
    if(this.state.keycloak) {
      if(this.state.authenticated) return (
        <div>
          <p>
            This is a Keycloak-secured component of your application. You shouldn't be able to see this
            unless you've authenticated with Keycloak.
          </p>
          <UserInfo keycloak={this.state.keycloak} />
         
          {/* <Logout keycloak={this.state.keycloak} /> */}
          <button onClick={ () => this.state.keycloak.logout() }>
                 Logout
         </button>
         <br/>
         <br/>
         <br/>
         <ApiCalls/>
        </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    );
  }
}

export default SecuredORGA2;