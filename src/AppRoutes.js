import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SecuredORGA1 from './pages/SecuredORGA1';
import SecuredORGA2 from './pages/SecuredORGA2';
import CreateUpdateUser from './user-crud/CreateUpdateUser'
import UserList from './user-crud/UserList'
import Admin from './pages/Admin';
import User from './pages/User';
import Unsecured from './pages/Unsecured';
import AllUser from './pages/AllUser';
function AppRoutes(props) {
    return (
        <div>
              <Routes>
                <Route exact path="/" element={<Welcome/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/all-user" element={<AllUser/>} />
                <Route path="/unsecured" element={<Unsecured/>} />
                <Route path="/securedORGA1" element={<SecuredORGA1/>} />
                <Route path="/securedORGA2" element={<SecuredORGA2/>} />
                <Route path='/users-list' element={<UserList/>}/>
                <Route path='/users-add-update/:userId' element={<CreateUpdateUser/>}/>
                <Route path='*' element={<div>Page not found</div>}/>
             </Routes>
        </div>
    );
}

export default AppRoutes;