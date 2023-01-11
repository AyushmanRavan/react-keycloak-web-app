import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-type": "application/json"
  }
});

httpInstance.interceptors.request.use(
    function (config) {
      if(config.url.includes("/keycloak")) return config;
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            config.headers['Realm'] = localStorage.getItem('Realm');
        }
        config.headers['Content-Type'] = 'application/json'; // Override existing headers.
        config.headers['Realm'] = localStorage.getItem('Realm');
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
);
  
httpInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpInstance;





// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

