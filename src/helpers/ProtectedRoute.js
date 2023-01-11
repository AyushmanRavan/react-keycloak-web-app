import React from 'react';
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
    
};

function ProtectedRoute(props) {   //{ component, path, requiredRoles, exact = false }
    return (
        <div>
            
        </div>
    );
}

export default ProtectedRoute;





// <Route path="/login" component={Login} />
// <ProtectedRoute exact={true} path="/" component={Dashboard} />
// <ProtectedRoute path="/settings" component={Settings} />
// <ProtectedRoute component={Dashboard} />
// <AuthRoute path="/settings" component={Dashboard} requiredRoles={[ String(UserRoles.admin), String(UserRoles.superAdmin)]} />






// ProtectedRoute.js
// =====================================================
// import { ROLE } from './roles';
// import { useSelector } from 'react-redux';
// import { Navigate, Route, useLocation } from 'react-router-dom';
// const PrivateRoute = ({ children, roles }: { children: JSX.Element, roles: Array<Role> }) => {
//   let location = useLocation();
//   const { isAuthenticated, user, loading } = useSelector(state => state.auth);
//   if (loading) {
//     return <p className="container">Checking auth..</p>;
//   }
//   const userHasRequiredRole = user && roles.includes(user.role) ? true : false;
//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }
//   if (isAuthenticated && !userHasRequiredRole) {
//     return <AccessDenied />; // build your won access denied page (sth like 404)
//   }
//   return children;
// };

// If user isn't authenticated redirected to login page.
// If user is authenticated but doesn't have required role specified then render AccessDenied page.
// Else render the children component.

{/* <Route path="admin-dashboard" element={
  <PrivateRoute roles={[Role.Admin]}>
    <AdminDashboard />
  </PrivateRoute>
} /> */}