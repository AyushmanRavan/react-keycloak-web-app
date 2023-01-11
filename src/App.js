import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from "./AppRoutes"
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/all-user">AllUser</Link></li>
            <li><Link to="/unsecured">Unsecured</Link></li>
            <li><Link to="/securedORGA1">ORGA1</Link></li>
            <li><Link to="/securedORGA2">ORGA2</Link></li>
            <li><Link to="/users-list">Manage Users</Link></li>
          </ul>
         <AppRoutes/>
        </div>
        {/* <AddUpdate/> */}
      </BrowserRouter>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }
// export default App;


//npm install -g create-react-app
//npx create-react-app keycloak-react
// npm i axios --save
//https://github.com/keycloak/keycloak/releases/download/20.0.1/keycloak-20.0.1.tar.gz
//https://github.com/keycloak/keycloak/releases/download/15.0.2/keycloak-15.0.2.tar.gz

//https://www.appsdeveloperblog.com/role-based-access-control-to-rest-api-with-keycloak/
//https://www.springcloud.io/post/2022-07/spring-boot-keycloak-roles/#gsc.tab=0




// global CLI version is greater than our local Angular CLI version
// https://www.positronx.io/how-to-globally-install-angular-10-cli-via-npm/

// https://tomas-pinto.medium.com/keycloak-clients-and-roles-a-tutorial-b334147f1dbd
// https://linuxdatahub.com/keycloak-clients-and-client-roles-explained-with-examples/


// Show the Elasticsearch Version via the Executable
// # navigate to the Elasticsearch installation directory
// cd /usr/share/elasticsearch  
// $ sudo ./bin/elasticsearch --version


// Set the Access Type to confidential, Authorization Enabled to ON , Service Account Enabled to ON and click Save.



// ineat-admin  
// ineat-user
// ineat-ayush

// orga1-user 
// orga1-admin 

// orga2-user 
// orga2-admin


// https://www.anycodings.com/1questions/37039/spring-boot-keycloak-multi-tenant-configuration
// https://github.com/ineat/spring-keycloak-multitenant/tree/master/src/main/java/com/ineat/spring/keycloak/multitenant
// https://cycykum.medium.com/kong-oauth2-0-keycloak-bearer-only-client-and-jwt-d29e7d860b75
// https://github.com/ineat/spring-keycloak-multitenant/tree/master/src/main/java/com/ineat/spring/keycloak/multitenant
// https://www.czetsuyatech.com/search/label/keycloak
// https://github.com/czetsuya/keycloak-rest-admin-api/tree/master/src/main/java/com/czetsuya/security
// https://github.com/czetsuya/spring-keycloak-multi-tenant/tree/master/src/main/java/com/czetsuyatech
// https://github.com/czetsuya/spring-keycloak-multi-tenant/tree/master/src/main/java/com/czetsuyatech/configs
// https://github.com/ineat/spring-keycloak-multitenant/blob/master/src/main/java/com/ineat/spring/keycloak/multitenant/MultitenantConfiguration.java
// https://czetsuya.medium.com/
// https://andifalk.gitbook.io/openid-connect-workshop/hands-on-labs/lab2
// https://medium.com/@andreiszu
// https://github.com/ineat/spring-keycloak-multitenant/blob/master/src/main/java/com/ineat/spring/keycloak/multitenant/MultitenantConfiguration.java
// https://github.com/ineat/spring-keycloak-multitenant/blob/master/src/main/java/com/ineat/spring/keycloak/multitenant/MultitenantConfiguration.java
// https://www.tomjo.net/2020/11/12/keycloak-spring-security-basic-auth/
// https://www.tomjo.net/2020/11/12/keycloak-spring-security-basic-auth/
// https://blog.codecentric.de/keycloak-und-spring-security-teil-3-kommunikation-via-keycloakresttemplate
// https://www.anycodings.com/1questions/5545462/problem-calling-a-bearer-only-keycloak-endpoint-from-a-springboot-client-app-to-a-also-spring-boot-bearer-only-app
// https://trimplement.com/blog/2021/10/keycloak-cors-api-tutorial/
