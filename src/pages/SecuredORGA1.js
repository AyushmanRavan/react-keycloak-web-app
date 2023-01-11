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
class SecuredORGA1 extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = new Keycloak('/ORGA1-keycloak.json'); //ORGA2-keycloak.json  //
    localStorage.setItem('Realm', "ORGA1")
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

export default SecuredORGA1;





 // localStorage.setItem("name", JSON.stringify(name));
      // getting stored value
      // const saved = localStorage.getItem("name");
      // const initialValue = JSON.parse(saved);
      // remove
      // localStorage.removeItem('my-key');

      // // remove all
      // localStorage.clear();







// import { useState, useEffect } from 'react';
// import Keycloak from 'keycloak-js';
// import UserInfo from './UserInfo';
// import Logout from './Logout';
// const Secured = () => {

//   const [keycloakState, setKeycloakState] = useState({ keycloak: null, authenticated: false });

//   useEffect(() => {
//     const keycloak = new Keycloak('/keycloak.json');
//     keycloak
//       .init({ onLoad: 'login-required' })
//       .then((authenticated) => {
//         setKeycloakState({ keycloak: keycloak, authenticated: authenticated });
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   }, []);

//   if(keycloakState) {
//     if(keycloakState.authenticated) return (
//       <div>
//         <p>
//           This is a Keycloak-secured component of your application. You shouldn't be able to see this
//           unless you've authenticated with Keycloak.
//         </p>
//         <UserInfo keycloak={keycloakState.keycloak} />
//         <Logout keycloak={keycloakState.keycloak} />
//       </div>
//     ); else return (<div>Unable to authenticate!</div>)
//   }
     
//   return (
//     <div>Initializing Keycloak...</div>
//   );

// };

// export default Secured;









// Step 1: Create dev Realm
// Name: Microservice

// Step 2: Create a Client (Micro-Service)
// Client ID       : employee-service
// Client Protocol : openid-connect
// Root URI  :  http://localhost:8081

// Step 3: Configure Client
// Access Type         : confidential
// Valid Redirect URIs : http://localhost:8081/*
// # Required for micro-service to micro-service secured calls
// Service Accounts Enabled : On
// Authorization Enabled : On
// Note: Access Type confidential supports getting access token using client credentials grant as well as authorization code grant. 
// If a micro-service need to call another micro-service, caller will be ‘confidential’ and callee will be ‘bearer-only’.

// Step 4: Create Client Role
// Create role USER is created under employee-service.

// Step 5: Create a Mapper (To get user_name in access token)
// Keycloak access token is a JWT. It is a JSON and each field in that JSON is called a claim.
// By default, logged in username is returned in a claim named “preferred_username” in access token. 
// Spring Security OAuth2 Resource Server expects username in a claim named “user_name”. 
// Hence, we had to create below mapper to map logged in username to a new claim named user_name.

// Step 6: Create User
// Step 7: Map Client Role To User



























// https://medium.com/@bcarunmail/accessing-secure-rest-api-using-spring-oauth2resttemplate-ef18377e2e05
// https://medium.com/@bcarunmail/accessing-secure-rest-api-using-spring-oauth2resttemplate-ef18377e2e05

// 1. Create ‘dev-realm’ Realm In Keycloak

// 2. Create Department Service Client (Callee)
// Client ID department-service
// Client Protocol : openid-connect
// Root URL http://localhost:8095
// Access Type : Bearer only, means that this service will be accessed with just a bearer token. It also means that, this service will not call any other secure micro-service.

// 3. Create a Role Under Department Service (ADMIN)

// 4. Create Employee Service Client
// Client ID employee-service
// Client Protocol : openid-connect
// Root URL http://localhost:8085
// Access Type : Confidential, means that this service will call or access another micro-service by getting an access token from Keycloak using its client credentials. Also, this micro-service may be called from another micro-service or UI.
// # Required for micro-service to micro-service secured calls
// Service Accounts Enabled : On
// Authorization Enabled : On
// Note: Access Type confidential supports getting access token using client credentials grant as well as authorization code grant. If a micro-service need to call another micro-service, caller will be ‘confidential’ and callee will be ‘bearer-only’.

// 5. Create Client Role Under Employee Service (USER)

// 6. Setup Protocol Mapper
// Keycloak access token is a JWT. It is a JSON and each field in that JSON is called a claim.
// By default, logged in username is returned in a claim named “preferred_username” in access token. 
// Spring Security OAuth2 Resource Server expects username in a claim named “user_name”. 
// Hence, we had to create below mapper to map logged in username to a new claim named user_name.

// 7. Create a User
// Note 1: Employee Service will use client credentials to call Department Service
// Note 2: Remember to setup password for user in credentials tab..

// 8. Map Client Role To User

// 6. Configure Service Account Role to Access Department Service
// Note: User will have access to employee-service, but a micro-service will have access to department-service. Micro-service acting like user is called service account.














































// Client for Spring Boot app with actuator endpoints in Keycloak
//Client-Protocol: OpenID Connect
// Access-Type: confidential
// Standard-Flow Enabled: on
// Direct-Access grants: off
//
// Root URL: http://localhost:30002
// Valid redirect URIs: /*
//Base URL: /
//Admin URL: /
//Web Origins: *


//Confidential access-type indicates, that we will need a secret to authenticate this client against the Keycloak server
//service accounts enabled set to ON allows us to generate a token dedicated to this client.

//Client for Spring Boot Admin in Keycloak
//Client-Protocol: OpenID Connect
//Access-Type: confidential
//Standard-Flow Enabled: on
//Direct-Access grants: off
//Service-Accounts Enabled: on
//Authorization Enabled: on
//Root URL: http://localhost:30001
//Valid redirect URIs: /*
//Base URL: /admin
//Admin URL: /
//Web Origins: *