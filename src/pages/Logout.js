import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import WithRouter from './WithRouter'

class Logout extends Component {
 
    logout() {
        this.props.history.push('/')
        this.props.keycloak.logout();
    }

    render() {
        return (
            <button onClick={ () => this.logout() }>
                Logout
            </button>
        );
    }
}


export default WithRouter(Logout);