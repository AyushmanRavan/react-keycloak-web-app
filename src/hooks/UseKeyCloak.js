// import { useState, useEffect } from 'react'
// import Keycloak from 'keycloak-js';

// function useKeyCloak() {
//     const [keycloak, setKeycloak] = useState(null);

//     useEffect(() => {
//         var initSetting = { 
//             onLoad: 'login-required',
//         }
//         var keycloak = new Keycloak('/keycloak.json');
        
//         console.log("before init - authenticated: ", keycloak.authenticated)

//         keycloak.init(initSetting)
//             .then(authenticated => {
//                 console.log("init - authenticated")
//                 setKeycloak(keycloak)
//             });
//         console.log("afer init - authenticated: ", keycloak.authenticated)
//     }, []);

//     return keycloak
// }

// export default useKeyCloak



// // General permissions are suitable as realm roles
// // more fine-grained permissions that are used exclusively by the individual clients are suitable as client roles



// // const keycloak = useKeyCloak();
// // keycloak.hasResourceRole("manager")


// {/* <div>
//     {keycloak && (keycloak.hasResourceRole("manager") || keycloak.hasResourceRole("user")) && (<div>
//         <div>loggin succeed</div>
//             <div> <UserInfo keycloak={keycloak} /></div>
//             <div><Logout keycloak={keycloak} /></div>
//         </div>
//     )}
//     {keycloak && !keycloak.authenticated &&
//         (<div><a onClick={() => keycloak.login()}>Login</a></div>)
//     }
// </div> */}