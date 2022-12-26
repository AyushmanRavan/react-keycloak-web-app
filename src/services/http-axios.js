import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
    function (config) {
      if(config.url.includes("/keycloak")) return config;
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            // config.headers['Realm'] = 'ORGA2';
        }
        config.headers['Content-Type'] = 'application/json'; // Override existing headers.
        config.headers['Realm'] = 'ORGA2';
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
);
  
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;





// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });


// import http from "../http-common";

// const getAll = () => {
//   return http.get("/tutorials");
// };

// const get = id => {
//   return http.get(`/tutorials/${id}`);
// };

// const create = data => {
//   return http.post("/tutorials", data);
// };

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

// const TutorialService = {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
//   findByTitle
// };

// export default TutorialService;




// res.headers["accept"] = "application/json";
// res.headers["content-type"] = "application/json";
// res.config.headers["Accept"] = "application/json";
// res.config.headers["Content-Type"] = "application/json";


// axiosInstance.interceptors.response.use((response) => { // block to handle success case
//     return response
//  }, function (error) { // block to handle error case
//     const originalRequest = error.config;
//  
//     if (error.response.status === 401 && originalRequest.url ===
//  'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 
//         // Redirect to any unauthorised route to avoid infinite loop...
//         return Promise.reject(error);
//     }
//  
//     if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token
//  
//         originalRequest._retry = true;
//         const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
//         return axios.post('/auth/token',
//             {
//                 "refresh_token": refreshToken
//             })
//             .then(res => {
//                 if (res.status === 201) {
//                     localStorage.setItem('auth_token',res.data);
//                     axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
//                     return axios(originalRequest);
//                 }
//             })
//     }
//     return Promise.reject(error);
// });

























// import axios from "axios";

// // Configure outbound request interceptor logic
// axios.interceptors.request.use(request => {
//   return request;
// }, error => Promise.reject(error));

// // Configure incoming response interceptor logic
// axios.interceptors.response.use(response => {
//   return response;
// }, error => Promise.reject(error));






























// import axios from 'axios';
// // const axios = require('axios');

// // Step-1: Create a new Axios instance with a custom config.
// // The timeout is set to 10s. If the request takes longer than
// // that then the request will be aborted.
// const customAxios = axios.create({
//     baseURL: `https://example.com/api`,
//     timeout: 10000, 
//     headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' }
// });

// // Step-2: Create request, response & error handlers
// const requestHandler = request => {
//     // Token will be dynamic so we can use any app-specific way to always   
//     // fetch the new token before making the call
//     request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';  
  
//     return request;
// };

// const responseHandler = response => {
//     if (response.status === 401) {
//         window.location = '/login';
//     }

//     return response;
// };

// const errorHandler = error => {
//     return Promise.reject(error);
// };

// // Step-3: Configure/make use of request & response interceptors from Axios
// // Note: You can create one method say configureInterceptors, add below in that,
// // export and call it in an init function of the application/page.
// customAxios.interceptors.request.use(
//     (request) => requestHandler(request),
//     (error) => errorHandler(error)
// );

// customAxios.interceptors.response.use(
//     (response) => responseHandler(response),
//     (error) => errorHandler(error)
//  );


// // Step-4: Export the newly created Axios instance to be used in different locations.
// export default customAxios;
// ===============================================================================================

// // updated initSimpleCalls.js
// import axios from './customAxios'; // importing axios from customAxios

// // Here we're just passing the relative url path instead of full url.
// axios.get('/getData')
//    .then(response => console.log(response))
//    .catch(error => console.log(error));

// // Changed earlier get call with post
// axios.post('/postData', {
//     name: 'Sample',
//     contact: '0123456789'
// }).then(response => console.log(response))
// .catch(error => console.log(error));


// // Note: If you don't want to intercept the request & response, you can always make use of axios instead of customAxios.